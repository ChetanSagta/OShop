import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMessage } from '../models/responseMessage';

@Injectable(
    {providedIn: 'root'}
)
export class CartService{

    constructor(private http: HttpClient){}

    addToCart(productId: number, quantity: number): Observable<ResponseMessage>{


        const httpHeaders = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('AuthorizationToken'))
        .set('Access-Control-Allow-Origin', '*');

        const httpOptions = {
            httpHeaders,
            responseType: 'text'
            }

        const user = localStorage.getItem('User');
        const body = {productId, quantity, userName: String(JSON.parse(user!).username)};

        return this.http.post<ResponseMessage>('http://localhost:8080/api/addProductToCart', body,
        {headers : httpHeaders});
    }

    updateCart(productId: number, quantity: number){

    }

    removeFromCart(productId: number){

    }

    showCart(){
    }

}
