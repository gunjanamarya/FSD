import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order.model';
import { Router } from '@angular/router';


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
  show: boolean = false;

  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.getOrders();
    this.changeStatus();
  }

  getOrders() {
    this.orders = this.active_orders = this.approved_orders = []
    this.orderService.getCart().subscribe(data => {
      var temp1 = data
      if (temp1.length == 0) {
        this.show = true
      }
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
      // console.log(this.active_orders, this.approved_orders)
    })
  }

  changeStatus() {
    let now, diff, temp;
    now = new Date().getTime();
    for (var i = 0; i < this.active_orders.length; i++) {
      temp = new Date(this.active_orders[i].purchase_timestamp).getTime();
      diff = Math.floor((now - temp) / 1000 * 60);
      console.log(diff);
      if (diff >= 10) {
        this.orderService.approveOrder(this.active_orders[i].id).subscribe();
      }
      this.getOrders();
    }
  }

  delete(id) {
    this.orderService.deleteOrder(id).subscribe(result => {
      this.getOrders();
    })
  }

  edit(id) {
    this.router.navigate(['/dashboard'],
      {
        queryParams: {
          "id": id
        }
      }
    )

  }

}
