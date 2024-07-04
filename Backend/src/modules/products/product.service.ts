import { Product } from './../../models/product.model';
import { Injectable } from '@nestjs/common';
@Injectable()
export class productService {

    private Product: Product[] = [
        {
            id: 1,
            categoryID : 1,
            productName: 'product 1',
            price: 100
        },
        {
            id: 2,
            categoryID : 1,
            productName: 'product 2',
            price: 200
        },
        {
            id: 3,
            categoryID : 1,
            productName: 'product 3',
            price: 300
        },
        {
            id: 4,
            categoryID : 1,
            productName: 'product 4',
            price: 400
        },
        {
            id: 5,
            categoryID : 1,
            productName: 'product 5',
            price: 500
        },
        {
            id: 6,
            categoryID : 1,
            productName: 'product 6',
            price: 600
        },
    ]

    
  getProducts(): Product[] {
    return this.Product;
  }
  createProduct(): string {
    return 'create product';
  }
  detailProduct(): string {
    return 'detail product';
  }
  updateProduct(): string {
    return 'update product';
  }
  deleteProduct(): string {
    return 'delete product';
  }
}
