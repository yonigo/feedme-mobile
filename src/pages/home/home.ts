import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { Order } from '../../models/order';
import { OrdersProvider } from '../../providers/orders/orders';
import { ProductsProvider } from '../../providers/products/products';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orders: Array<Order>;
  user: User;
  constructor(private nav: NavController, private auth: AuthServiceProvider, ordersProvider: OrdersProvider, protected productsProvider: ProductsProvider) {
    this.user = this.auth.getUserInfo();

    if (!this.user) {
      this.logout();
      return;
    }

    ordersProvider.getOrders(this.user.id).subscribe(orders => {
        this.orders = orders;      
    });
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  public addNewOrder() {
    this.nav.setRoot('CreatePage');
  }
}