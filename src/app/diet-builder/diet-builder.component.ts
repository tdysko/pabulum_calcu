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
  dietSummary: Product;

  constructor(@Inject(ProductsService) private productsService) {
    this.dietSummary = {
      id: 0,
      proteins: 0,
      name: "Summary",
      carbs: 0,
      fats: 0
    };
  }


  ngOnInit() {
  }

  selectEvent(item) {
    this.dietProducts.push(item);
    this.addToSummary(item);
    console.log(item);
  }

  getSummaryProteins(): number {
    var proteins: number = 0;
    for (const product of this.dietProducts) {
      proteins = proteins + product.proteins;
    }
    return proteins;
  }

  getSummaryCarbs(): number {
    var carbs: number = 0;
    for (const product of this.dietProducts) {
      carbs = carbs + product.proteins;
    }
    return carbs;
  }

  getSummaryFats(): number {
    var fats: number = 0;
    for (const product of this.dietProducts) {
      fats = fats + product.proteins;
    }
    return fats;
  }

  addToSummary(product) {
    this.dietSummary.proteins = parseFloat((this.dietSummary.proteins + product.proteins).toPrecision(5));
    this.dietSummary.carbs = parseFloat((this.dietSummary.carbs + product.carbs).toPrecision(5));
    this.dietSummary.fats = parseFloat((this.dietSummary.fats + product.fats).toPrecision(5));
  }

  removeFromSummary(product) {
    this.dietSummary.proteins = parseFloat((this.dietSummary.proteins - product.proteins).toPrecision(5));
    this.dietSummary.carbs = parseFloat((this.dietSummary.carbs - product.carbs).toPrecision(5));
    this.dietSummary.fats = parseFloat((this.dietSummary.fats - product.fats).toPrecision(5));
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  deleteFieldValue(i) {
    this.removeFromSummary(this.dietProducts[i]);
    this.dietProducts.splice(i, 1);
  }
}
