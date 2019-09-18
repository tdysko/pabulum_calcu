import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccalculatorComponent } from './basiccalculator.component';

describe('BasiccalculatorComponent', () => {
  let component: BasiccalculatorComponent;
  let fixture: ComponentFixture<BasiccalculatorComponent>;

  beforeEach(async(() => {
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
