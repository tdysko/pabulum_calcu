import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Validationmessage {
  public Message: string;
  public Result: boolean;

  constructor() { }
}
