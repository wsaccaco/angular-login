/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 24/02/2017.
 */
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {LoginBaseComponent, PasswordComponent, AuthComponent} from './core'

const LoginRouter: Routes = [
  {
    path: "login",
    component: LoginBaseComponent,
    children: [{
        path: "",
        component: AuthComponent
      },
      {
        path: "password",
        component: PasswordComponent
      }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouterModule {
}
