import { AppUser } from './../models/AppUser';
import { Product } from 'src/app/models/Product';
import { ShoppingCart } from '../models/ShoppingCart';
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

        const user = localStorage.getItem('User');
        const body = {productId, quantity, userName: String(JSON.parse(user!).username)};

        return this.http.post<ResponseMessage>('http://localhost:8080/api/addProductToCart', body,
        {headers : httpHeaders});
    }

    updateCart(productId: number, quantity: number){

    }

    showCart(): Observable<ShoppingCart[]>{
        const httpHeaders = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('AuthorizationToken'))
        .set('Access-Control-Allow-Origin', '*');

        const user = localStorage.getItem('User');
        console.log("UserJson : " + user);
        const userName = String(JSON.parse(user!).username);

        console.log('User: ' + userName);

        return this.http.post<ShoppingCart[]>('http://localhost:8080/api/getCart', userName,
        {headers : httpHeaders});
    }

    deleteItemFromCart(product: Product): Observable<any>{
        const httpHeaders = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('AuthorizationToken'))
        .set('Access-Control-Allow-Origin', '*');

        const user = localStorage.getItem('User');
        const userName = String(JSON.parse(user!).username);
        const productId = product.productId;

        return this.http.post('http://localhost:8080/api/deleteProductFromCart', {productId, userName}, {headers : httpHeaders});
    }

}
