import { Injectable } from '@angular/core';
import { FieldvalidationService } from './fieldvalidation.service';
import { Validationmessage } from '../validationmessage.service';

@Injectable({
  providedIn: 'root'
})
export class HeightvalidatorService extends FieldvalidationService {

  constructor() {
    super();
    this.Min = 140;
    this.Max = 220;
  }

  validate(Val: number): Validationmessage {
    this.Value = Val;

    const ValMessage = new Validationmessage();

    if (this.Value < this.Min) {
      ValMessage.Message = 'Too short. You need to be atleast ' + this.Min + ' centimeters height.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Max) {
      ValMessage.Message = 'Too tall. You cannot be taller than ' + this.Max + ' centimeters.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Min && this.Value < this.Max) {
      ValMessage.Result = true;
    }

    return ValMessage;
  }
}
