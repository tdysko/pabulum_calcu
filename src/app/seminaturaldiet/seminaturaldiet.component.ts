import { Component, OnInit } from '@angular/core';
import { RequirementsdataService, RequirementsData } from '../requirementsdata.service';

@Component({
  selector: 'app-seminaturaldiet',
  templateUrl: './seminaturaldiet.component.html',
  styleUrls: ['./seminaturaldiet.component.scss']
})
export class SeminaturaldietComponent implements OnInit {

  requirements: RequirementsData = null;

  constructor(private _requirementsdataSerivce: RequirementsdataService) {
    this.requirements = _requirementsdataSerivce.GetRequirements();
  }

  ngOnInit() {
  }

}
