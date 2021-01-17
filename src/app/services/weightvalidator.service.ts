import { Injectable } from '@angular/core';
import { FieldvalidationService } from './fieldvalidation.service';
import { Validationmessage } from './validationmessage.service';

@Injectable({
  providedIn: 'root'
})
export class WeightvalidatorService extends FieldvalidationService {

  constructor() {
    super();
    this.Min = 40;
    this.Max = 999;
  }

  validate(Val: number): Validationmessage {
    this.Value = Val;

    const ValMessage = new Validationmessage();

    if (this.Value < this.Min) {
      ValMessage.Message = 'You are very light. Result will not be accurate if you\'re lighter than ' + this.Min + ' kilograms.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Max) {
      ValMessage.Message = 'You are very heavy. Result will not be accurate if you\'re heavier than ' + this.Max + ' kilograms.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Min && this.Value < this.Max) {
      ValMessage.Result = true;
    }

    return ValMessage;
  }
}
