/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 27/02/2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BaseComponent{
  constructor(public authService: AuthService, private router: Router){
    console.log('base')
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
