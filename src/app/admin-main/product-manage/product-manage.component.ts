import { Component } from '@angular/core';
import { products } from 'src/app/data/product-data';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {
  products: ProductModel[] = products;

  EDIT(productId: number) {
    
  }
  DELETE(productId: number) {
    // Find the index of the product to delete by its ID
    const productIndexToDelete = this.products.findIndex(product => product.id === productId);

    if (productIndexToDelete !== -1) {
      // Remove the product from the array
      this.products.splice(productIndexToDelete, 1);
      // Implement any additional delete logic, e.g., making an API call to delete the product on the server

      console.log(`Deleted product with ID ${productId}`);
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }
}