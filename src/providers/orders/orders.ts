import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDataProvider } from '../server-data/server-data';
import { AuthServiceProvider } from '../auth-service/auth-service';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {
  userId: number;
  constructor(public http: HttpClient, public serverData: ServerDataProvider, auth: AuthServiceProvider) {
    this.userId = auth.getUserInfo().id;
  }

  getOrders(userId: number) {
    let path = this.serverData.serverAddress + 'orders/supplier/' + this.userId;
    return this.http.get(path);
  }
}