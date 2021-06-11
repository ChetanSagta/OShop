import { CartService } from './../../service/cartService';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../service/productService';
import { DataTransferService } from './../../service/dataTransferService';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({ selector: 'product', templateUrl: './product.component.html', styleUrls: ['./product.component.css'] })
export class ProductComponent implements OnInit {

  @Input() url?: string;

  currentProduct?: Product;

  quantity = 1;

  constructor(private productSerice: ProductService, private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productNameFromRoute = String(routeParams.get('productName'));
    this.productSerice.getProduct(productNameFromRoute).subscribe(
      product => {
        this.currentProduct = product;
        console.log('current Product : ' , this.currentProduct.title);
      }
    );
  }

  addProduct(count: number): void {
    if (this.quantity > 0) {
      this.quantity += count;
    }


    if (this.quantity === 0) {
      this.quantity = 1;
    }
  }

  addToCart(): void{
    this.cartService.addToCart(this.currentProduct?.productId!, this.quantity).subscribe( response => {
      console.log(response);
    });
  }

}
