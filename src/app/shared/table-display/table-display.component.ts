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

  @Input() private dataSource: Array<Product>;
  @Input() private headers: Array<string>;
  @Input() private observe: Subject<any>;
  @Output() private productChange: EventEmitter<Product> = new EventEmitter();

  selectedRowIndex = 1;

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
