import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasiccalculatorComponent } from './basiccalculator.component';

describe('BasiccalculatorComponent', () => {
  let component: BasiccalculatorComponent;
  let fixture: ComponentFixture<BasiccalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiccalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiccalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
