import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDataProvider } from '../server-data/server-data';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../models/order';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {
  constructor(public http: HttpClient, public serverData: ServerDataProvider) {
  }

  getOrders(userId: number): Observable<Array<Order>> {
    let path = this.serverData.serverAddress + 'orders/supplier/' + userId;
    return this.http.get<Array<Order>>(path);
  }
}