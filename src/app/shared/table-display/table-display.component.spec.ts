import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableDisplayComponent } from './table-display.component';

describe('TableDisplayComponent', () => {
  let component: TableDisplayComponent;
  let fixture: ComponentFixture<TableDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
