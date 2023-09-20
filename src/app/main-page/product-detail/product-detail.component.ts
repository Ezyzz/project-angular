import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/product-data';
import { ProductModel } from 'src/app/models/product-model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productId!: number;
  product: ProductModel | undefined;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        this.productId = parseInt(idString, 10);
        this.fetchProductDetails();
      } else {
        console.error('Product ID not provided.');
      }
    });
  }

  fetchProductDetails(): void {
    this.product = products.find(product => product.id === this.productId);
    if (!this.product) {
      console.log('Product not found.');
    }
  }

}
