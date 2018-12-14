import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Order, Cart } from '../../models/Order.model';
import { products } from '../../../app/app.settings';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[];
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.cart = JSON.parse(this.loginService.getSessionStorageVar('cart'))
    console.log(this.cart);
  }

  find(item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].item == item) {
        return i;
      }
    }
    return -1
  }

  findPrice(item) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].item == item) {
        return products[i].price;
      }
    }
  }

}