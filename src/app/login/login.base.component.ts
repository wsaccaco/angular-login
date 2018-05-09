/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 23/02/2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.base.component.html',
  styleUrls: ['./login.base.component.css'],
  encapsulation : ViewEncapsulation.None
})

export class LoginBaseComponent{
  constructor(public authService: AuthService){
    this.authService.logout();
  }
}
