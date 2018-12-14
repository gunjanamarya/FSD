import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/Order.model';
import { products } from '../../../app/app.settings';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cart: Cart[] = new Array();
  amount_spent: number = 0;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    let temp;
    temp = this.loginService.getSessionStorageVar('cart');
    if (temp && temp.length > 0) {
      this.cart = JSON.parse(this.loginService.getSessionStorageVar('cart'));
      this.calculateAmount();
    }
  }

  add(i) {
    this.cart.push({ "item": products[i].item, "quantity": 1 })
    this.calculateAmount()
  }

  increement(item) {
    let i = this.find(item)
    this.cart[i].quantity++;
    this.calculateAmount()
  }

  decreement(item) {
    let i = this.find(item)
    this.cart[i].quantity--;
    if (this.cart[i].quantity == 0) {
      this.cart.splice(i, 1);
    }
    this.calculateAmount()
  }

  find(item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].item == item) {
        return i;
      }
    }
    return -1
  }

  displayQuantity(item) {
    let i = this.find(item)
    if (i != -1) {
      return this.cart[i].quantity
    }
    else {
      return null
    }
  }

  findPrice(item) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].item == item) {
        return products[i].price;
      }
    }
  }

  calculateAmount() {
    this.amount_spent = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.amount_spent += (this.cart[i].quantity * this.findPrice(this.cart[i].item))
    }
    this.loginService.clearSessionVar('cart');
    this.loginService.setSessionStorageVar('cart', JSON.stringify(this.cart));
  }
}