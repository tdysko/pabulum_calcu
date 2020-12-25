import { Component } from '@angular/core';
import GPX from 'gpx-parser-builder';
import * as lflyGPX from 'leaflet-gpx';
import { OptiFetchService } from '../services/opti-fetch.service';
import { TrainingSummaryService } from '../services/training-summary.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent {
  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;

  workoutName: string;
  totalDistance: number = 0;
  avgSpeed: number = 0;
  totalTime: number = 0;
  movingTime: number = 0;
  avgMovingSpeed: number = 0;
  lowestElevation: number = 0;
  highestElevation: number = 0;
  elevationGain: number = 0;
  elevationLoss: number = 0;
  avgHr: number = 0;
  avgCadence: number = 0;
  avgTemp: number = 0;

  mapCnt: any;

  constructor(
    private trainingSummaryService: TrainingSummaryService,
    private optiFetchService: OptiFetchService) {

  }

  handleFileInput(files: FileList) {
    let fileReader = new FileReader();
    let that = this;

    this.fileToUpload = files.item(0);

    fileReader.onload = () => {
      that.gpxtext = fileReader.result;
      //let gpxBuilder = that.parseFile(that.gpxtext);
      //that.calculateSummary(gpxBuilder.trk[0].trkseg[0].trkpt);
      console.log(that.fileToUpload);
      that.culculateLeaflySummary(that.gpxtext);
    }
    fileReader.readAsText(this.fileToUpload);
  }

  culculateLeaflySummary(gpxFile) {
    this.mapCnt = lflyGPX.map('leafletmap').setView([51.505, -0.09], 13);

    lflyGPX.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.mapCnt);

    let that = this;

    var gpx = new lflyGPX.GPX(gpxFile, {
      async: true,
      marker_options: {
        startIconUrl: '',
        endIconUrl: '',
        shadowUrl: ''
      }
    }).on('loaded', function (e) {
      that.mapCnt.fitBounds(e.target.getBounds());
      that.fillSummaryFields(e);
    }).addTo(this.mapCnt);

    console.log('map');
    console.log(this.mapCnt);
  }

  fillSummaryFields(e) {
    console.log(e);
    this.mapCnt.fitBounds(e.target.getBounds());

    this.workoutName = e.target.get_name();

    this.totalDistance = e.target.get_distance() / 1000;
    this.avgSpeed = e.target.get_total_speed();
    this.totalTime = e.target.get_total_time();

    this.movingTime = e.target.get_moving_time();
    this.avgMovingSpeed = e.target.get_moving_speed();

    this.lowestElevation = e.target.get_elevation_min_imp();
    this.highestElevation = e.target.get_elevation_max();

    this.elevationGain = e.target.get_elevation_gain();
    this.elevationLoss = e.target.get_elevation_loss();

    this.avgHr = e.target.get_average_hr();
    this.avgCadence = e.target.get_average_cadence();
    this.avgTemp = e.target.get_average_temp();
  }

  calculateSummary(track: Array<any>) {
    console.log('asd');
    for (var i = 1; i < track.length; i++) {
      const wayPointDistance: number = this.trainingSummaryService.getDistanceFromLatLonInKm(
        track[i].$.lat,
        track[i].$.lon,
        track[i - 1].$.lat,
        track[i - 1].$.lon);

      const wayPointTimeDifference = (track[i].time - track[i - 1].time);
      const wayPointSpeed: number = wayPointDistance / wayPointTimeDifference;

      this.totalDistance = this.totalDistance + wayPointDistance;
    }

    this.totalTime = track[track.length - 1].time - track[0].time;
    let avgSpeed: number = (this.totalDistance / (track[track.length - 1].time - track[0].time)) * 60 * 60 * 1000;

    this.avgSpeed = parseFloat(avgSpeed.toString().substring(0, avgSpeed.toString().indexOf('.') + 3));
  }

  saveWorkout() {
    this.optiFetchService.saveWorkout(
      this.totalDistance,
      this.totalTime,
      this.movingTime,
      this.avgSpeed);
  }

  parseFile(fileString: any) {
    return GPX.parse(fileString);
  }
}
