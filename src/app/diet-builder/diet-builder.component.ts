import { Component, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { RequirementsdataService } from '../services/requirementsdata.service';

@Component({
  selector: 'app-diet-builder',
  templateUrl: './diet-builder.component.html',
  styleUrls: ['./diet-builder.component.scss']
})
export class DietBuilderComponent {

  private keyword = 'Product1';
  private data = this.productsService.products;
  private dietProducts: Array<Product> = new Array<Product>();
  private dietSummary: Product;

  constructor(@Inject(ProductsService) private productsService,
    private _requirementsdataService: RequirementsdataService) {
    this.dietSummary = {
      Id: 0,
      Proteins: 0,
      Product1: 'Summary',
      Carbohydrates: 0,
      Fats: 0
    };
    this.data = this.productsService.products;
  }

  selectEvent(item) {
    this.dietProducts.push(item);
    this.addToSummary(item);
  }

  getSummaryProteins(): number {
    let proteins = 0;
    for (const product of this.dietProducts) {
      proteins = proteins + product.Proteins;
    }
    return parseFloat(proteins.toPrecision(5));
  }

  getSummaryCarbs(): number {
    let carbs = 0;
    for (const product of this.dietProducts) {
      carbs = carbs + product.Carbohydrates;
    }
    return parseFloat(carbs.toPrecision(5));
  }

  getSummaryFats(): number {
    let fats = 0;
    for (const product of this.dietProducts) {
      fats = fats + product.Fats;
    }
    return parseFloat(fats.toPrecision(5));
  }

  addToSummary(product) {
    this.dietSummary.Proteins = this.addToPrecision(this.dietSummary.Proteins, product.proteins, 5);
    this.dietSummary.Carbohydrates = this.addToPrecision(this.dietSummary.Carbohydrates, product.carbs, 5);
    this.dietSummary.Fats = this.addToPrecision(this.dietSummary.Fats, product.fats, 5);
  }

  removeFromSummary(product) {
    this.dietSummary.Proteins = this.subtractToPrecision(this.dietSummary.Proteins, product.proteins, 5);
    this.dietSummary.Carbohydrates = this.subtractToPrecision(this.dietSummary.Carbohydrates, product.carbs, 5);
    this.dietSummary.Fats = this.subtractToPrecision(this.dietSummary.Fats, product.fats, 5);
  }

  subtractToPrecision(number1: number, number2: number, precision: number): number {
    return parseFloat((number1 - number2).toPrecision(precision))
  }

  addToPrecision(number1: number, number2: number, precision: number): number {
    return parseFloat((number1 + number2).toPrecision(precision))
  }

  onChangeSearch(val: string) {
    console.log('change seearch');
    console.log(this.productsService.products);
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
