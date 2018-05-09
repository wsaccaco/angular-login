import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user){
    if(user.email == "dataenriquecida" && user.password == "elcomercio2017")
      sessionStorage.setItem('token_id', "true");
    return this.islogin();
  }

  islogin(){
    return sessionStorage.getItem('token_id') == 'true';
  }

  logout(): void {
    sessionStorage.removeItem('token_id');
    this.isLoggedIn = false;
  }
}
