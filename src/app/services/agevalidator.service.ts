import { Injectable } from '@angular/core';
import { FieldvalidationService } from './fieldvalidation.service';
import { Validationmessage } from './validationmessage.service';

@Injectable({
  providedIn: 'root'
})
export class AgevalidatorService extends FieldvalidationService {
  constructor() {
    super();
    this.Min = 18;
    this.Max = 68;
  }

  validate(Val: number): Validationmessage {
    this.Value = Val;
    const ValMessage = new Validationmessage();

    if (this.Value < this.Min) {
      ValMessage.Message = 'Too young. You need to be atleast ' + this.Min + ' years old.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Max) {
      ValMessage.Message = 'Too old. You cannot be older than ' + this.Max + ' years old.';
      ValMessage.Result = false;
    }

    if (this.Value > this.Min && this.Value < this.Max) {
      ValMessage.Result = true;
    }

    return ValMessage;
  }
}
