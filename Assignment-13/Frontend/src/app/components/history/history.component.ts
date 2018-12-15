import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [OrderService]
})
export class HistoryComponent implements OnInit {

  orders: Order[] = new Array();
  active_orders: Order[];
  approved_orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orders = this.active_orders = this.approved_orders = []
    this.orderService.getCart().subscribe(data => {
      var temp1 = data
      for (var i = 0; i < temp1.length; i++) {
        this.orders.push({
          id: temp1[i].id,
          username: temp1[i].username,
          cart: JSON.parse(temp1[i].cart),
          amount_spent: temp1[i].amount_spent,
          purchase_timestamp: temp1[i].purchase_timestamp,
          order_status: temp1[i].order_status
        })
      }
      this.active_orders = this.orders.filter(order => order.order_status == 'submitted')
      this.approved_orders = this.orders.filter(order => order.order_status != 'submitted')
      console.log(this.active_orders, this.approved_orders)
    })
  }

  delete(id) {
    this.orderService.deleteOrder(id).subscribe(result => {
      this.getOrders();
    })
  }

}
