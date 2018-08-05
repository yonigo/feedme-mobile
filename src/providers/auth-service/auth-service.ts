import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  /**
   *
   */
  constructor(public http: HttpClient) { }

  /**
   * login
   */
  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let url = 'http://localhost:3000/users/login';
        this.http.post<User>(url, credentials)
          .subscribe(user => {
            this.currentUser = user;
            observer.next(user != null);
            observer.complete();
          }, error => {
            console.error(error);
            observer.next(false);
            observer.complete();
          });
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
