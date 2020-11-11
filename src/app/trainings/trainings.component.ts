import { Component } from '@angular/core';
import GPX from 'gpx-parser-builder';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent {
  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;

  handleFileInput(files: FileList) {
    let fileReader = new FileReader();
    this.fileToUpload = files.item(0);
    let text: string | ArrayBuffer;
    let that = this;

    fileReader.onload = function (e) {
      console.log(fileReader.result);
      that.gpxtext = fileReader.result;
      that.parseFile(that.gpxtext);
    }
    fileReader.readAsText(this.fileToUpload);
  }

  parseFile(fileString: any) {
    console.log('parsing: ' + this.gpxtext);

    const gpx = GPX.parse(this.gpxtext);

    console.log(gpx);
  }
}
