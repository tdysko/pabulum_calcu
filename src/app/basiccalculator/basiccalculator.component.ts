import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { RequirementsdataService } from '../requirementsdata.service';

@Component({
  selector: 'app-basiccalculator',
  templateUrl: './basiccalculator.component.html',
  styleUrls: ['./basiccalculator.component.scss']
})
export class BasiccalculatorComponent implements OnInit {
  @Input() waga: number;
  @Input() wzrost: number;
  @Input() plec: number;
  @Input() wiek: number;
  @Input() goal = 2;

  @Output() public childWagaEvent = new EventEmitter();
  @Output() public childAgeEvent = new EventEmitter();
  @Output() public childHeightEvent = new EventEmitter();
  @Output() public childSexEvent = new EventEmitter();
  @Output() public childGoalEvent = new EventEmitter();

  rds: RequirementsdataService;

  constructor(private _requirementsdataService: RequirementsdataService) {
    this.rds = _requirementsdataService;
  }
  ngOnInit() {
    this.rds.setHeight(this.wzrost);
    this.rds.setWeight(this.waga);
    this.rds.setSex(this.plec);
    this.rds.setAge(this.wiek);
    this.rds.setGoal(this.goal);
  }
  WeightChange() {
    this.rds.setWeight(this.waga);
    this.childWagaEvent.emit(this.waga);
  }
  HeightChange() {
    this.rds.setHeight(this.wzrost);
    this.childHeightEvent.emit(this.wzrost);
  }
  AgeChange() {
    this.rds.setAge(this.wiek);
    this.childAgeEvent.emit(this.wiek);
  }
  SexChange() {
    this.rds.setSex(this.plec);
    this.childSexEvent.emit(this.plec);
  }
  GoalChange() {
    this.rds.setGoal(this.goal);
    this.childGoalEvent.emit(this.goal);
  }
}
