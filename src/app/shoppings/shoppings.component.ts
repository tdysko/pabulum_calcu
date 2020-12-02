import { Component, OnInit } from '@angular/core';
import { tesseract } from 'node-tesseract-ocr';
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

    const config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }

    tesseract.recognize(this.fileToUpload.name, config)
      .then(text => {
        console.log("Result:", text)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  parseFile(fileString: any) {
    console.log(fileString);
  }
}
