import { Component, OnInit } from '@angular/core';
import { DetailsDisplayComponent } from '../../details-display.component';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent extends DetailsDisplayComponent implements OnInit {

  ngOnInit() {
    this.observe.subscribe((x: Product) => {
      this.updateProduct(x);
    });
  }

  updateProduct(x: Product): void {
    this.detail = x;
  }
}
