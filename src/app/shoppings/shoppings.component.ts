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

    console.log(this.fileToUpload);
    //const { createWorker } = require('tesseract.js');
    //console.log(createWorker);
    console.log(tess);

    tess.recognize(this.fileToUpload)
      .then((res: any) => {
        console.log(res);
      })
      .catch(console.error);
  };

  parseFile(fileString: any) {
    console.log(fileString);
  }
}
