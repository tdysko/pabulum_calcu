import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit {

  @Input() totalDistance: Number;
  @Input() avgSpeed: Number;
  @Input() totalTime: String = '0 h 0 m 0 s';

  constructor() { }

  ngOnInit(): void {
  }

}
