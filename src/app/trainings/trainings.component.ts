import { Component } from '@angular/core';
import GPX from 'gpx-parser-builder';
import * as lflyGPX from 'leaflet-gpx';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent {
  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;
  totalDistance: number = 0;
  avgSpeed: number = 0;
  totalTime: string = '0 h 0 m 0 s';

  handleFileInput(files: FileList) {
    let fileReader = new FileReader();
    let that = this;

    this.fileToUpload = files.item(0);

    fileReader.onload = () => {
      that.gpxtext = fileReader.result;
      let gpxBuilder = that.parseFile(that.gpxtext);
      that.calculateSummary(gpxBuilder.trk[0].trkseg[0].trkpt);
      that.culculateLeaflySummary(that.gpxtext);
    }
    fileReader.readAsText(this.fileToUpload);
  }

  culculateLeaflySummary(gpxFile) {

    var map = lflyGPX.map('leafletmap');
    lflyGPX.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(map);

    var gpx = new lflyGPX.GPX(gpxFile, { async: true }).on('loaded', function (e) {
      map.fitBounds(e.target.getBounds());
      console.log(e.target.get_name());
      console.log(e.target.get_distance());

    }).addTo(map);
  }

  calculateSummary(track: Array<any>) {
    for (var i = 1; i < track.length; i++) {
      const wayPointDistance: number = this.getDistanceFromLatLonInKm(
        track[i].$.lat,
        track[i].$.lon,
        track[i - 1].$.lat,
        track[i - 1].$.lon);

      const wayPointTimeDifference = (track[i].time - track[i - 1].time);
      const wayPointSpeed: number = wayPointDistance / wayPointTimeDifference;

      this.totalDistance = this.totalDistance + wayPointDistance;
    }

    this.totalDistance = this.convertTotalDistance(this.totalDistance);
    this.totalTime = this.getTotalTimeString(track[track.length - 1].time - track[0].time);

    let avgSpeed: number = (this.totalDistance / (track[track.length - 1].time - track[0].time)) * 60 * 60 * 1000;

    this.avgSpeed = parseFloat(avgSpeed.toString().substring(0, avgSpeed.toString().indexOf('.') + 3));
  }

  getTotalTimeString(time: number): any {
    let seconds: number = time / 1000;
    let minutes: number = seconds / 60;
    let hours: number = minutes / 60;
    let result: string = '';

    if (hours >= 1) {
      hours = Math.floor(hours);
      result = hours + ' h ';

      minutes = minutes - hours * 60;
    } else {
      result = '0 h ';
    }

    if (minutes >= 1) {
      minutes = Math.floor(minutes);
      result = result + minutes + ' m ';

      seconds = seconds - hours * 60 * 60 - minutes * 60;
    }
    else {
      result = result + '0 m';
    }

    if (seconds >= 1) {
      seconds = Math.floor(seconds);

      result = result + seconds + ' s';
    } else {
      result = result + ' 0 s';
    }

    return result;
  }

  convertTotalDistance(totalDistance: number) {
    let calcTtlDistance: string = '';
    let dotIndex = this.totalDistance.toString().indexOf('.');

    for (var c = 0; c < dotIndex + 3; c++) {
      calcTtlDistance = calcTtlDistance + this.totalDistance.toString()[c];
    }

    return parseFloat(calcTtlDistance);
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  parseFile(fileString: any) {
    return GPX.parse(fileString);
  }
}
