import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { productService } from './product.service';
import { responseData } from '../../global/globalClass';
import { httpStatusCode, httpMessage } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: productService) {}

  @Get()
  getProducts(): responseData<Product[]> {
    try {
      return new responseData<Product[]>(
        this.productsService.getProducts(),
        httpStatusCode.SUCCESS,
        httpMessage.SUCCESS,
      );
    } catch (error) {
      return new responseData<Product[]>(
        null,
        httpStatusCode.ERROR,
        httpMessage.ERROR,
      );
    }
  }
  @Post()
  createProduct(): responseData<string> {
    try {
      return new responseData<string>(
        this.productsService.createProduct(),
        httpStatusCode.SUCCESS,
        httpMessage.SUCCESS,
      );
    } catch (error) {
      return new responseData<string>(
        null,
        httpStatusCode.ERROR,
        httpMessage.ERROR,
      );
    }
  }
  @Get('/:id')
  detailProduct(): responseData<string> {
    try {
      return new responseData<string>(
        this.productsService.detailProduct(),
        httpStatusCode.SUCCESS,
        httpMessage.SUCCESS,
      );
    } catch (error) {
      return new responseData<string>(
        null,
        httpStatusCode.ERROR,
        httpMessage.ERROR,
      );
    }
  }
  @Put('/:id')
  updateProduct(): responseData<string> {
    try {
      return new responseData<string>(
        this.productsService.updateProduct(),
        httpStatusCode.SUCCESS,
        httpMessage.SUCCESS,
      );
    } catch (error) {
      return new responseData<string>(
        null,
        httpStatusCode.ERROR,
        httpMessage.ERROR,
      );
    }
  }
  @Delete('/:id')
  deleteProduct(): responseData<string> {
    try {
      return new responseData<string>(
        this.productsService.deleteProduct(),
        httpStatusCode.SUCCESS,
        httpMessage.SUCCESS,
      );
    } catch (error) {
      return new responseData<string>(
        null,
        httpStatusCode.ERROR,
        httpMessage.ERROR,
      );
    }
  }
}
