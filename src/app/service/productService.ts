import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable(
    {providedIn: 'root'}
)
export class ProductService{

    constructor(private http: HttpClient){}

    httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

    requestOptions = {
        headers: this.httpHeaders,

      };

    getAllProducts(): Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:8080/api/products/getAll', this.requestOptions);
    }

    getProduct(productName: string): Observable<Product>{
        return this.http.get<Product>('http://localhost:8080/api/products/getByTitle/' + productName, this.requestOptions);
    }

}
