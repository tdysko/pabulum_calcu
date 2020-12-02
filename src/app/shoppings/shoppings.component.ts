import { Component, OnInit } from '@angular/core';
import * as tess from 'tesseract.js';
@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.sass']
})
export class ShoppingsComponent implements OnInit {

  constructor() { }

  read() {
    alert('a');
  }

  ngOnInit(): void {
  }
  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    const worker = tess.createWorker();

    let that = this;

    async function getTextFromImage() {
      await worker.load();
      await worker.loadLanguage('pol');
      await worker.initialize('pol');

      console.log(that.fileToUpload);
      console.log('reading');
      const { data: { text } } = await worker.recognize(that.fileToUpload);
      console.log(text);
      console.log('finished reading;')
      worker.terminate();
    };

    getTextFromImage();
  };

  parseFile(fileString: any) {
    console.log(fileString);
  }
}
