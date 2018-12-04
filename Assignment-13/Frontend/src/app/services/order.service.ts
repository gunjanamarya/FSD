import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Order } from '../models/Order.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class OrderService {

  base_url = 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }

  placeOrder(order): Observable<Order> {
    return this._http.post<Order>(this.base_url + 'place-order', order, httpOptions);
  }

  getCart(): Observable<Order> {
    return this._http.get<Order>(this.base_url + '/get-orders');
  }
}
