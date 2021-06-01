import { DataTransferService } from './../../service/dataTransferService';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({ selector: 'product', templateUrl: './product.component.html', styleUrls: ['./product.component.css'] })
export class ProductComponent implements OnInit {

  @Input() url?: string;

  currentProduct?: Product;

  quantity = 1;

  constructor(private dts: DataTransferService<Product>) { }

  ngOnInit(): void {
    console.log("Message from Home " + JSON.stringify(this.currentProduct = this.dts.getContent()));
  }

  addProduct(count: number): void {
    if (this.quantity > 0)
      this.quantity += count;


    if (this.quantity == 0)
      this.quantity = 1;
  }
}
