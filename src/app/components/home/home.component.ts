import { ProductService } from './../../service/productService';
import { Product } from '../../models/Product';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productBody ?: Product[];

  // constructor(private productService: ProductService, private dts: DataTransferService<Product>) { }
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(response => {
      this.productBody = response;
  });
  }

  logProduct(product: Product): void{
    console.log(product);
  }


  // selectLink(product: Product): void{
  //   this.route.navigate(['product/' + product.title]);
  //   // this.dts.setContent(product);
  // }

}
