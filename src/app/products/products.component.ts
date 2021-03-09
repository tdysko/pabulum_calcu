import { Component, OnInit, Inject } from '@angular/core';
import { Module } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { OptiFetchService } from '../services/opti-fetch.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private headers = ['Name', 'Proteins', 'Carbs', 'fats'];

  public ObservedProduct: Subject<Product> = new Subject<Product>();


  public modules: Module[] = null;
  columnDefs = [
    { field: 'Product1', headerName: 'Name', suppressSizeToFit: true },
    { field: 'Proteins', headerName: 'Proteins', suppressSizeToFit: true },
    { field: 'Carbohydrates', headerName: 'Carbs', suppressSizeToFit: true },
    { field: 'Fats', headerName: 'fats', suppressSizeToFit: true }
  ];
  defaultColDef = { resizable: true };
  rowData = [];

  constructor(@Inject(ProductsService) private productsService,
    private optiFetchService: OptiFetchService) { }

  ngOnInit() {
    let that = this;
    this.optiFetchService.readProducts().subscribe((data) => {
      that.rowData = data;
      this.ObservedProduct.next(this.productsService.products[0]);
    });
  }

  productSelectionChange(selectedProduct: Product): void {
    this.ObservedProduct.next(selectedProduct);
  }

  onRowClicked($event) {
    this.ObservedProduct.next($event.data);
  }
}
