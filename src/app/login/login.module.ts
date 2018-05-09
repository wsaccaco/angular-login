/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 24/02/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import {LoginRouterModule} from './login.router.module'
import {MaterialModule} from '@angular/material'

import {LoginBaseComponent, PasswordComponent, AuthComponent} from './core'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    LoginBaseComponent,
    PasswordComponent,
    AuthComponent
  ],
  imports: [
    LoginRouterModule,
    MaterialModule,
    BrowserModule,
    FormsModule
  ]
})

export class LoginModule{}
