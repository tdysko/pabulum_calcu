import { Component } from '@angular/core';
import GPX from 'gpx-parser-builder';
import * as lflyGPX from 'leaflet-gpx';
import { Workout } from 'src/app/models/workout';
import { OptiFetchService } from '../../services/opti-fetch.service';
import { TrainingSummaryService } from '../../services/training-summary.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent {
  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;
  workout: Workout = null;

  private totalDistance: number;
  private maxSpeed: number;

  private apiUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  private mapText = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

  mapCnt: any;

  constructor(
    private trainingSummaryService: TrainingSummaryService,
    private optiFetchService: OptiFetchService) {
    this.workout = new Workout(0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, null, '');
  }

  handleSave() {
    this.optiFetchService.saveWorkout(this.workout).subscribe();
  }

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
    this.configureLeafly();

    let that = this;
    new lflyGPX.GPX(gpxFile, {
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
  }

  fillSummaryFields(e) {
    this.mapCnt.fitBounds(e.target.getBounds());

    this.workout = new Workout(e.target.get_distance() / 1000,
      e.target.get_total_speed(),
      e.target.get_total_time(),
      e.target.get_name(),
      this.maxSpeed,
      e.target.get_moving_time(),
      e.target.get_moving_speed(),
      e.target.get_elevation_min_imp(),
      e.target.get_elevation_max(),
      e.target.get_elevation_gain(),
      e.target.get_elevation_loss(),
      e.target.get_average_hr(),
      e.target.get_end_time(),
      this.gpxtext
    );
  }

  getFileByteArray(fileText) {
    const bytes = [];
    for (var ii = 0; ii < fileText.length; ii++) {
      const code = fileText.charCodeAt(ii); // x00-xFFFF
      bytes.push(code & 255, code >> 8); // low, high
    }
    return bytes;
  }

  calculateSummary(track: Array<any>) {
    let currentMaxSpeed: number = 0;

    for (var i = 5; i < Math.round((track.length / 5)) * 5; i += 5) {
      const wayPointDistance: number = this.trainingSummaryService.getDistanceFromLatLonInKm(
        track[i - 5].$.lat,
        track[i - 5].$.lon,
        track[i].$.lat,
        track[i].$.lon) * 1000;

      const wayPointTimeDifference = (track[i].time - track[i - 5].time);
      const wayPointSpeed: number = wayPointDistance / wayPointTimeDifference;

      if (wayPointSpeed > currentMaxSpeed) {
        currentMaxSpeed = wayPointSpeed;
      }

      this.totalDistance = this.totalDistance + wayPointDistance;
    }

    this.maxSpeed = currentMaxSpeed * ((1) / (1 / 3600));
  }

  saveWorkout() {
    this.optiFetchService.saveWorkout(this.workout).subscribe();
  }

  configureLeafly(): any {
    this.mapCnt = lflyGPX.map('leafletmap').setView([51.505, -0.09], 13);

    lflyGPX.tileLayer(this.apiUrl, {
      maxZoom: 18,
      attribution: this.mapText,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.mapCnt);
  }

  parseFile(fileString: any) {
    return GPX.parse(fileString);
  }
}