import { Component } from '@angular/core';
import { Module } from 'ag-grid-community';
import { OptiFetchService } from 'src/app/services/opti-fetch.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.sass']
})
export class WorkoutsComponent {
  private gridApi;
  private gridColumnApi;

  public modules: Module[] = null;
  columnDefs = [
    { field: 'make', suppressSizeToFit: true },
    { field: 'model' },
    { field: 'price' }
  ];
  defaultColDef = { resizable: true };
  rowData = [];

  constructor(private optiFetchService: OptiFetchService) { }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    let tempData = [];
    this.optiFetchService.readWorkouts().subscribe((element) => {
      tempData = element;
      console.log(element);
    });
    console.log(tempData);
    this.rowData = tempData;
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    this.sizeToFit();
  }

  //   
  //   // this.http
  //   //   .get(
  //   //     'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
  //   //   )
  //   //   .subscribe((data) => {
  //   //     this.rowData = data;
  //   //   });
  // }
}