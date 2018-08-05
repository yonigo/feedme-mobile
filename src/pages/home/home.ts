import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { Order } from '../../models/order';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orders: Array<Order>;
  user: User;
  constructor(private nav: NavController, private auth: AuthServiceProvider) {
    this.user = this.auth.getUserInfo();

    let order1 = new Order('תפוזים', 30, new Date(new Date().getTime() + 60000), new Date());
    let order2 = new Order('תפוחים', 50, new Date(new Date().getTime() + 60000), new Date());
    let order3 = new Order ('קאפקייקס', 100, new Date(new Date().getTime() + 60000), null);

    this.orders = [order1, order2, order3];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  public addNewOrder(){
    this.nav.setRoot('NewOrderPage');
  }
}