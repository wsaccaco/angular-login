/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 23/02/2017.
 */

import {Component, HostBinding} from '@angular/core';
import {Router} from '@angular/router'
import { slideInDownAnimation } from '../../../animate';
import { AuthService } from './../../../services/core'
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { User } from './../../../models/core'

@Component({
  selector: 'login-auth',
  templateUrl: './auth.component.html',
  animations: [slideInDownAnimation]
})

export class AuthComponent{
  @HostBinding('@routeAnimation') routeAnimation = true;

  user = new User();
  _login = {
    touch : false,
    isLogin: false
  };

  constructor(public authService: AuthService, private router: Router){

  }

  submit(form){
    this._login.touch = true;
    this.login();
  }

  login(){
    this._login.isLogin = this.authService.login(this.user);
    this.router.navigate(['upload']);
  }

}
