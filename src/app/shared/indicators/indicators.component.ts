import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Requirement } from 'src/app/product.model';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.sass']
})
export class IndicatorsComponent {

  @Input() private dataSource: KeyValue<string, number>[];
  @Input() public requirements: Requirement;
  public heights: KeyValue<string, number>[];

  constructor() { }

}
