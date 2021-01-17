import { Injectable } from '@angular/core';
import { FieldTypes } from './field-types.service';
import { Validationmessage } from './validationmessage.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class FieldvalidationService {
  public Value: any;
  public Min: number;
  public Max: number;

  constructor() {
  }

  validate(FieldType: FieldTypes): Validationmessage {
    return new Validationmessage();
  }
}
