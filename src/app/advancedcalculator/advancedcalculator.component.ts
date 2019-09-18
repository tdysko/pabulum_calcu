import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { RequirementsdataService } from '../requirementsdata.service';
import { AgevalidatorService } from '../services/agevalidator.service';
import { HeightvalidatorService } from '../services/heightvalidator.service';
import { WeightvalidatorService } from '../services/weightvalidator.service';

@Component({
  selector: 'app-advancedcalculator',
  templateUrl: './advancedcalculator.component.html',
  styleUrls: ['./advancedcalculator.component.scss']
})
export class AdvancedcalculatorComponent {

  @Input() waga: number;
  @Input() wzrost: number;
  @Input() plec: number;
  @Input() wiek: number;
  @Input() goal: number;
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
    this.rds.setWeight(this.waga);
    this.childWagaEvent.emit(this.waga);
    this._WeightValidator.validate(this.waga);
  }
  HeightChange() {
    this.rds.setHeight(this.wzrost);
    this.childHeightEvent.emit(this.wzrost);
    this._heightValidator.validate(this.wzrost);
  }
  AgeChange() {
    this.rds.setAge(this.wiek);
    this.childAgeEvent.emit(this.wiek);
    this._ageValidator.validate(this.wiek);
  }
  SexChange() {
    this.rds.setSex(this.plec);
    this.childSexEvent.emit(this.plec);
  }
  GoalChange() {
    this.rds.setGoal(this.goal);
    this.childGoalEvent.emit(this.goal);
  }
  LifeStyleChange() {
    this.rds.setLifeStyle(this.LifeStyle);
  }
  MetabolismChange() {
    this.rds.setMetabolism(this.MetaBolism);
  }
}
