import { Products } from './../../models/Products';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productBody ?: Products[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

 const httpHeaders = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  const requestOptions = {                                                                                                                                                                                 
    headers: httpHeaders,

  };
    this.http.get<Products[]>("http://localhost:8080/api/products/getAll",requestOptions)
    .subscribe(response => {
        this.productBody = response;
        console.log(response);
    });

  }

}
