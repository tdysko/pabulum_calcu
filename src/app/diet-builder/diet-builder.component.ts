import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { RequirementsdataService } from '../services/requirementsdata.service';

@Component({
  selector: 'app-diet-builder',
  templateUrl: './diet-builder.component.html',
  styleUrls: ['./diet-builder.component.scss']
})
export class DietBuilderComponent implements OnInit {

  private keyword = 'name';
  private data = this.productsService.products;
  private dietProducts: Array<Product> = new Array<Product>();
  private dietSummary: Product;

  constructor(@Inject(ProductsService) private productsService,
    private _requirementsdataService: RequirementsdataService) {
    this.dietSummary = {
      id: 0,
      proteins: 0,
      name: 'Summary',
      carbs: 0,
      fats: 0
    };
  }

  ngOnInit() {
  }

  selectEvent(item) {
    this.dietProducts.push(item);
    this.addToSummary(item);
  }

  getSummaryProteins(): number {
    let proteins = 0;
    for (const product of this.dietProducts) {
      proteins = proteins + product.proteins;
    }
    return parseFloat(proteins.toPrecision(5));
  }

  getSummaryCarbs(): number {
    let carbs = 0;
    for (const product of this.dietProducts) {
      carbs = carbs + product.proteins;
    }
    return parseFloat(carbs.toPrecision(5));
  }

  getSummaryFats(): number {
    let fats = 0;
    for (const product of this.dietProducts) {
      fats = fats + product.proteins;
    }
    return parseFloat(fats.toPrecision(5));
  }

  addToSummary(product) {
    this.dietSummary.proteins = this.addToPrecision(this.dietSummary.proteins, product.proteins, 5);
    this.dietSummary.carbs = this.addToPrecision(this.dietSummary.carbs, product.carbs, 5);
    this.dietSummary.fats = this.addToPrecision(this.dietSummary.fats, product.fats, 5);
  }

  removeFromSummary(product) {
    this.dietSummary.proteins = this.subtractToPrecision(this.dietSummary.proteins, product.proteins, 5);
    this.dietSummary.carbs = this.subtractToPrecision(this.dietSummary.carbs, product.carbs, 5);
    this.dietSummary.fats = this.subtractToPrecision(this.dietSummary.fats, product.fats, 5);
  }

  subtractToPrecision(number1: number, number2: number, precision: number): number {
    return parseFloat((number1 - number2).toPrecision(precision))
  }

  addToPrecision(number1: number, number2: number, precision: number): number {
    return parseFloat((number1 + number2).toPrecision(precision))
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
