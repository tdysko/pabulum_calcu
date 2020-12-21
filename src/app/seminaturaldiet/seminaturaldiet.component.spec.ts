import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeminaturaldietComponent } from './seminaturaldiet.component';

describe('SeminaturaldietComponent', () => {
  let component: SeminaturaldietComponent;
  let fixture: ComponentFixture<SeminaturaldietComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminaturaldietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminaturaldietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
