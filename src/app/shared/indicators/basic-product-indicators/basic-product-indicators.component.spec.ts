import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProductIndicatorsComponent } from './basic-product-indicators.component';

describe('BasicProductIndicatorsComponent', () => {
  let component: BasicProductIndicatorsComponent;
  let fixture: ComponentFixture<BasicProductIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProductIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProductIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
