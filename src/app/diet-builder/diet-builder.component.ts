import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-diet-builder',
  templateUrl: './diet-builder.component.html',
  styleUrls: ['./diet-builder.component.scss']
})
export class DietBuilderComponent implements OnInit {

  keyword = 'name';
  data = this.productsService.products;
  dietProducts: Array<Product> = new Array<Product>();

  constructor(@Inject(ProductsService) private productsService) { }


  ngOnInit() {
  }

  selectEvent(item) {
    this.dietProducts.push(item);
    console.log(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  deleteFieldValue(i) {
    this.dietProducts.splice(i, 1);
  }
}
