import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { products } from '../../data/product-data'
import { ProductModel } from '../../models/product-model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  Products: ProductModel[] = products;

  constructor(private router: Router, private route: ActivatedRoute) {}

  viewProductDetail(productId: number) {
    this.router.navigate(['/main/product', productId]);
  }
}
