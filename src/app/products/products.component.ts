import { Component, OnInit, Inject } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { Product } from '../product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private headers = ['Name', 'Proteins', 'Carbs', 'fats'];

  public ObservedProduct: Subject<Product> = new Subject<Product>();

  constructor(@Inject(ProductsService) private productsService) {
  }

  ngOnInit() {
    console.log('creating observable');
    this.ObservedProduct.next(this.productsService.products[0]);
  }

  productSelectionChange(selectedProduct: Product): void {
    this.ObservedProduct.next(selectedProduct)
  }

}
