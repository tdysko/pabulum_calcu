import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { RequirementsdataService } from '../services/requirementsdata.service';
import { AgevalidatorService } from '../services/agevalidator.service';
import { HeightvalidatorService } from '../services/heightvalidator.service';
import { WeightvalidatorService } from '../services/weightvalidator.service';

@Component({
  selector: 'app-advancedcalculator',
  templateUrl: './advancedcalculator.component.html',
  styleUrls: ['./advancedcalculator.component.scss']
})
export class AdvancedcalculatorComponent {

  @Input() Waga: number;
  @Input() Wzrost: number;
  @Input() Plec: number;
  @Input() Wiek: number;
  @Input() Goal: number;
  LifeStyle = 0;
  MetaBolism = 0;

  @Output() public childWagaEvent = new EventEmitter();
  @Output() public childAgeEvent = new EventEmitter();
  @Output() public childHeightEvent = new EventEmitter();
  @Output() public childSexEvent = new EventEmitter();
  @Output() public childGoalEvent = new EventEmitter();


  rds: RequirementsdataService;

  constructor(private _requirementsdataService: RequirementsdataService, private _ageValidator: AgevalidatorService
    , private _heightValidator: HeightvalidatorService
    , private _WeightValidator: WeightvalidatorService) {
    this.rds = _requirementsdataService;
    this._WeightValidator = new WeightvalidatorService();
    this._heightValidator = new HeightvalidatorService();
    this._ageValidator = new AgevalidatorService();
  }

  WeightChange() {
    this.rds.setWeight(this.Waga);
    this.childWagaEvent.emit(this.Waga);
    this._WeightValidator.validate(this.Waga);
  }
  HeightChange() {
    this.rds.setHeight(this.Wzrost);
    this.childHeightEvent.emit(this.Wzrost);
    this._heightValidator.validate(this.Wzrost);
  }
  AgeChange() {
    this.rds.setAge(this.Wiek);
    this.childAgeEvent.emit(this.Wiek);
    this._ageValidator.validate(this.Wiek);
  }
  SexChange() {
    this.rds.setSex(this.Plec);
    this.childSexEvent.emit(this.Plec);
  }
  GoalChange() {
    this.rds.setGoal(this.Goal);
    this.childGoalEvent.emit(this.Goal);
  }
  LifeStyleChange() {
    this.rds.setLifeStyle(this.LifeStyle);
  }
  MetabolismChange() {
    this.rds.setMetabolism(this.MetaBolism);
  }
}
