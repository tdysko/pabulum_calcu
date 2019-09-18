import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';
import { Observable, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent {

  @Input() dataSource: Array<Product>;
  @Input() headers: Array<string>;
  @Input('observe') detail: Subject<any>;
  @Output() productChange: EventEmitter<Product> = new EventEmitter();

  selectedRowIndex: number = 1;

  rowClick(row: Product): void {
    this.highlight(row);
    this.productChange.emit(this.getProduct(this.selectedRowIndex));
  }

  highlight(row: Product): void {
    this.selectedRowIndex = row.id;
  }

  getProduct(id: number): Product {
    for (const product of this.dataSource) {
      if (product.id === this.selectedRowIndex) {
        return product;
      }
    }
    return null;
  }
}
