import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullnaturaldietComponent } from './fullnaturaldiet.component';

describe('FullnaturaldietComponent', () => {
  let component: FullnaturaldietComponent;
  let fixture: ComponentFixture<FullnaturaldietComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullnaturaldietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullnaturaldietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
