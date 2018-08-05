import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDataProvider } from '../server-data/server-data';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {
  constructor(public http: HttpClient, protected serverData: ServerDataProvider) {}

  public getProducts(): Observable<Product[]> {
    var url = this.serverData.serverAddress + 'products';

    return this.http.get<Product[]>(url);
  }
}
