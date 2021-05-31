import { DataTransferService } from './../../service/dataTransferService';
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

  constructor(private http:HttpClient, private router: Router,private dts: DataTransferService<Product>) { }

  ngOnInit(): void {

 const httpHeaders = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  const requestOptions = {                                                                                                                                                                                 
    headers: httpHeaders,

  };
    this.http.get<Product[]>("http://localhost:8080/api/products/getAll",requestOptions)
    .subscribe(response => {
        this.productBody = response;
        console.log(response);
    });

  }

  selectLink(product: Product){
    this.dts.setContent(product);
  }

}
