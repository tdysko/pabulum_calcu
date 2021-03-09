import { Component, OnInit } from '@angular/core';
import { RequirementsdataService } from '../services/requirementsdata.service';
import { AgevalidatorService } from '../services/agevalidator.service';
import { HeightvalidatorService } from '../services/heightvalidator.service';
import { WeightvalidatorService } from '../services/weightvalidator.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  constructor(private _requirementsdataService: RequirementsdataService, private _ageValidator: AgevalidatorService
    , private _heightValidator: HeightvalidatorService
    , private _WeightValidator: WeightvalidatorService) {
  }

  public tdee = 0;
  public weight: number = 67;
  public height: number = 166;
  public sex: number = 1;
  public age: number = 31;
  public time = 0;
  public intensity = 0;
  public workouttype = 0;
  public lifestyle = 0;
  public metabolism = 0;
  public goal = 2;

  rds: RequirementsdataService;
  advancedcalc = false;

  ngOnInit() {
    this._WeightValidator = new WeightvalidatorService();
    this._heightValidator = new HeightvalidatorService();
    this._ageValidator = new AgevalidatorService();
  }

  Podstawowe() {
    this.advancedcalc = false;
  }

  Zaawansowane() {
    this.advancedcalc = true;
  }

  ObliczZapotrzebowanie() {
    this.tdee = this._requirementsdataService.ObliczZapotrzebowanie();
    // this.rds.SetRequirements((this.tdee * 0.15) / 4, (this.tdee * 0.55) / 4, (this.tdee * 0.3) / 9);
  }

}
