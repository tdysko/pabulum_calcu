import { Component, OnInit } from '@angular/core';
import { Module } from 'ag-grid-community';
import { OptiFetchService } from 'src/app/services/opti-fetch.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.sass']
})
export class WorkoutsComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  public modules: Module[] = null;
  columnDefs = [
    { field: 'TotalDistance', headerName: 'Distance', suppressSizeToFit: true },
    { field: 'IdSportsNavigation.Name', headerName: 'Sport', suppressSizeToFit: true },
    { field: 'Date', headerName: 'Date', suppressSizeToFit: true }
  ];
  defaultColDef = { resizable: true };
  rowData = [];

  constructor(private optiFetchService: OptiFetchService) { }

  ngOnInit() {
    let that = this;
    this.optiFetchService.readWorkouts().subscribe((data) => {
      that.rowData = data;
    });
  }
}
