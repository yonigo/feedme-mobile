import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServerDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerDataProvider {
  serverAddress: string;

  constructor(public http: HttpClient) {
    this.serverAddress = 'http://localhost:3000/';
  }
}
