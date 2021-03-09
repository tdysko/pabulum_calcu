import { Injectable } from '@angular/core';
import { OptiFetchService } from './opti-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [];

  constructor(private optiFetchService: OptiFetchService) {
    this.optiFetchService.readProducts().subscribe(products => this.products = products);
  }
}
