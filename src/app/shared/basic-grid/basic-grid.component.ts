import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'ag-grid-community';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.sass']
})
export class BasicGridComponent {
  @Input() gridApi;
  @Input() gridColumnApi;

  @Input() modules: Module[] = null;
  @Input() columnDefs = [];
  @Input() defaultColDef = {};
  @Input() rowData = [];

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
    this.sizeToFit();
  }
}
