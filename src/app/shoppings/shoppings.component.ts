import { Component } from '@angular/core';
import { Module } from 'ag-grid-community';
import * as tess from 'tesseract.js';
import { Purchase } from '../models/purchase';
import { OcrService } from '../services/ocr.service';
import { OptiFetchService } from '../services/opti-fetch.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.sass']
})
export class ShoppingsComponent {
  parsedLines: string[];
  originalLines: string[];

  private gridApi;
  private gridColumnApi;

  public modules: Module[] = null;
  columnDefs = [
    { field: 'Date', headerName: 'Date', suppressSizeToFit: true },
    { field: 'IdShopsNavigation.Name', headerName: 'Shop name', suppressSizeToFit: true },
    { field: 'IdShopsNavigation.Address', headerName: 'Shop address', suppressSizeToFit: true },
    { field: 'Price', headerName: 'Price', suppressSizeToFit: true }
  ];
  defaultColDef = { resizable: true };
  rowData = [];

  constructor(private optiFetchService: OptiFetchService,
    private ocrService: OcrService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    let that = this;
    this.optiFetchService.readShoppings().subscribe((data) => {
      data.map(element => {
        element.Date = this.datePipe.transform(element.Date, 'EEEE, yyyy-dd-MM');
      });

      that.rowData = data;
      console.log(that.rowData);
    });
  }

  reparse() {
    let ParsedArray = this.ocrService.parseArray(this.originalLines);
    this.originalLines = ParsedArray;

    let that = this;
    let Prices = new Array<Purchase>();

    this.originalLines.forEach(element => {
      Prices.push(that.ocrService.getPrice(element));
    });
  }

  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;
  prsdText: string;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    const worker = tess.createWorker();

    let that = this;

    async function getTextFromImage() {
      await worker.load();
      await worker.loadLanguage('pol');
      await worker.initialize('pol');

      const { data: { text } } = await worker.recognize(that.fileToUpload);
      that.prsdText = text;

      that.originalLines = that.prsdText.split("\n");
      that.parsedLines = that.prsdText.split("\n");
      that.ocrService.parseArray(that.parsedLines);

      worker.terminate();
    };

    getTextFromImage();
  };

  Products: Array<Purchase>;
}
