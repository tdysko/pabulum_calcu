import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminaturaldietComponent } from './seminaturaldiet.component';

describe('SeminaturaldietComponent', () => {
  let component: SeminaturaldietComponent;
  let fixture: ComponentFixture<SeminaturaldietComponent>;

  beforeEach(async(() => {
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
