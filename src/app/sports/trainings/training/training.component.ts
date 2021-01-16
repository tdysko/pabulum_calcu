import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnChanges {

  @Input() workout: Workout;

  TotalTime: string;
  MovingTime: string;

  ngOnChanges() {
    const totalTime = new Date((this.workout.TotalTime) as number).toISOString().slice(11, -1);
    const movingTime = new Date((this.workout.MovingTime) as number).toISOString().slice(11, -1);
    this.TotalTime = totalTime.substr(0, totalTime.lastIndexOf('.'));
    this.MovingTime = movingTime.substr(0, movingTime.lastIndexOf('.'));
  }
}
