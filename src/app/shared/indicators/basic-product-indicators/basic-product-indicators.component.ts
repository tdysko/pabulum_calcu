import { Component, OnInit, Input } from '@angular/core';
import { IndicatorsComponent } from '../indicators.component';
import { Product, Requirement } from 'src/app/models/product.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basic-product-indicators',
  templateUrl: './basic-product-indicators.component.html',
  styleUrls: ['./basic-product-indicators.component.sass']
})
export class BasicProductIndicatorsComponent extends IndicatorsComponent implements OnInit {

  @Input() observe: Subject<any>;
  private indicatorHeights: Product;
  private indicatorRadiuses: Product;
  private product: Product;

  constructor() {
    super();
    this.indicatorHeights = {} as Product;
    this.indicatorRadiuses = {} as Product;
    this.setIndicatorsInitialHeights();
  }

  ngOnInit(): void {
    this.heights = [
      { key: 'Proteins', value: 24 },
      { key: 'Carbohydrates', value: 43 },
      { key: 'Fats', value: 8 }
    ];

    this.indicatorHeights = {} as Product;
    this.indicatorRadiuses = {} as Product;

    this.requirements = {} as Requirement;
    this.requirements.Proteins = 24;
    this.requirements.Carbohydrates = 44;
    this.requirements.Fats = 8;
    this.setIndicatorsInitialHeights();

    this.observe.subscribe((x: Product) => {
      this.product = x;
      this.setIndicatorsHeights();
    });
  }

  setIndicatorsHeights(): void {
    for (const property of Object.keys(this.product)) {
      this.indicatorHeights[property] =
        ((this.getIndicatorHeight(property) / 1) * 100) > 4 ?
          ((this.getIndicatorHeight(property) / 1) * 100) > 98 ? 98 :
            (this.getIndicatorHeight(property) / 1) * 100 : 0;
    }
    this.setIndicatorRadius();
  }

  setIndicatorRadius() {
    for (const property of Object.keys(this.product)) {
      this.indicatorRadiuses[property] = (this.getIndicatorRadius(property) / 1);
    }
  }

  getIndicatorRadius(key: string): number {
    let ratio: number = (this.product[key] / this.requirements[key]);

    if (ratio > 1) {
      ratio = 1;
    }

    if (ratio < 0.75) {
      ratio = 0;
    }

    ratio = (ratio / 1) * 25;

    return ratio;
  }

  setIndicatorsInitialHeights(): void {
    Object.keys(this.indicatorHeights).forEach(function (entry) {
      this.indicatorHeights[entry] = 0;
    });
  }

  getIndicatorWidth(): number {
    return (100 / this.heights.length) - 15;
  }

  getIndicatorLeftPadding(index: number): number {
    if (index === 0) {
      return 0;
    } else {
      return 15;
    }
  }

  getIndicatorHeight(key: string): number {
    // console.log('requirements');
    // console.log(this.requirements);
    // console.log('product');
    // console.log(this.product);
    // console.log('key');
    // console.log(key);
    return this.product[key] / this.requirements[key];
  }
}
