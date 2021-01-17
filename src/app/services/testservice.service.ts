import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  public sum = 0;
  public sumChanged: EventEmitter<number>;

  constructor() {
    this.sumChanged = new EventEmitter();
  }

  public changeSum(coef: number) {
    this.sum = this.sum + coef;
    this.sumChanged.emit(this.sum);
  }
}
