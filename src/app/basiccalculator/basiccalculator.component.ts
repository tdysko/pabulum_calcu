import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequirementsdataService } from '../services/requirementsdata.service';

@Component({
  selector: 'app-basiccalculator',
  templateUrl: './basiccalculator.component.html',
  styleUrls: ['./basiccalculator.component.scss']
})
export class BasiccalculatorComponent implements OnInit {
  @Input() Waga: number = 67;
  @Input() Wzrost: number = 166;
  @Input() Plec: number = 31;
  @Input() Wiek: number = 31;
  @Input() Goal = 2;

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
    this.rds.setHeight(this.Wzrost);
    this.rds.setWeight(this.Waga);
    this.rds.setSex(this.Plec);
    this.rds.setAge(this.Wiek);
    this.rds.setGoal(this.Goal);
  }
  WeightChange() {
    this.rds.setWeight(this.Waga);
    this.childWagaEvent.emit(this.Waga);
  }
  HeightChange() {
    this.rds.setHeight(this.Wzrost);
    this.childHeightEvent.emit(this.Wzrost);
  }
  AgeChange() {
    this.rds.setAge(this.Wiek);
    this.childAgeEvent.emit(this.Wiek);
  }
  SexChange() {
    this.rds.setSex(this.Plec);
    this.childSexEvent.emit(this.Plec);
  }
  GoalChange() {
    this.rds.setGoal(this.Goal);
    this.childGoalEvent.emit(this.Goal);
  }
}
