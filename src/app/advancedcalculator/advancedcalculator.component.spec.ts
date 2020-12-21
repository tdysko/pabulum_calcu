import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedcalculatorComponent } from './advancedcalculator.component';

describe('AdvancedcalculatorComponent', () => {
  let component: AdvancedcalculatorComponent;
  let fixture: ComponentFixture<AdvancedcalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
