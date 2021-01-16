import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit, OnChanges {

  @Input() workout: Workout;

  totalTime: string;
  movingTime: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const totalTime = new Date(this.workout.totalTime).toISOString().slice(11, -1);
    const movingTime = new Date(this.workout.movingTime).toISOString().slice(11, -1);
    this.totalTime = totalTime.substr(0, totalTime.lastIndexOf('.'));
    this.movingTime = movingTime.substr(0, movingTime.lastIndexOf('.'));
  }
}
