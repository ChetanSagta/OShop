import { Product } from 'src/app/models/Product';
import { CartService } from './../../service/cartService';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/ShoppingCart';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingItems?: ShoppingCart[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.showCart().subscribe(
      response => {
        this.shoppingItems = response;
        }
      );
  }

  deleteCartItem(product: Product): void{
    this.cartService.deleteItemFromCart(product).subscribe(x => console.log(x));
    location.reload(true);
  }

}
