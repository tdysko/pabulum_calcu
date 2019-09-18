import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietBuilderComponent } from './diet-builder.component';

describe('DietBuilderComponent', () => {
  let component: DietBuilderComponent;
  let fixture: ComponentFixture<DietBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
