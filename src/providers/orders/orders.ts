import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDataProvider } from '../server-data/server-data';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../models/order';
import { ProductsProvider } from '../products/products';
import { AuthServiceProvider } from '../auth-service/auth-service';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {
  constructor(public http: HttpClient, public serverData: ServerDataProvider, public productsProvider: ProductsProvider, protected auth: AuthServiceProvider) {
  }

  public getOrders(userId: string): Observable<Order[]> {
    return Observable.create(observable => {
      this.productsProvider.getProducts().subscribe(products => {
        let path = this.serverData.serverAddress + 'orders/supplier/' + userId;

        this.http.get<Array<Order>>(path).toPromise().then(orders => {
          if (!orders.length) {
            let order1 = new Order('5b66ff963cf846238c5ccb03', 30, new Date(new Date().getTime() + 60000), new Date());
            let order2 = new Order('5b67005f3cf846238c5ccb04', 50, new Date(new Date().getTime() + 60000), new Date());
            orders.push(order1);
            orders.push(order2);
          }

          orders.forEach(order => {
            order.productObject = products.find(product => product['_id'] === order.product);
          });

          observable.next(orders);
          observable.complete();
        });
      });
    });
  }

  public createOrder(): Observable<boolean> {
    return Observable.create(observable => {
      let path = this.serverData.serverAddress + 'orders/';
      let user = this.auth.getUserInfo();

      let order = new Order();
      order.product = '5b6703133cf846238c5ccb05';
      order.quantity = 100;
      order.expirationDate = new Date(new Date().getTime() + (60 * 60 * 1000));
      order.orderDate = new Date();
      order.type = 'test';
      order.status = 'open';
      order.package = 'container';
      order.supplier = user.id;

      this.http.post(path, order).subscribe(order => {
        observable.next(order);
        observable.complete();
      });      
    });
  }  
}