import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit {

  @Input() totalDistance: Number;
  @Input() avgSpeed: Number;
  @Input() totalTime: Date;
  @Input() workoutName: String;

  @Input() movingTime: any;
  @Input() avgMovingSpeed: any;
  @Input() lowestElevation: any;
  @Input() highestElevation: any;
  @Input() elevationGain: any;
  @Input() elevationLoss: any;
  @Input() avgHr: any;
  @Input() avgCadence: any;
  @Input() avgTemp: any;

  constructor() { }

  ngOnInit(): void {
  }
}
