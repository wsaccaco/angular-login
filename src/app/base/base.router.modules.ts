/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 27/02/2017.
 */
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {BaseComponent} from './core';
import {ListUserComponent, CenterUserComponent} from './sub/user/core'
import {ListTaskComponent, CenterTaskComponent} from './sub/task/core'
import {AuthGuard} from "../services/auth.guard.service";

const BaseRouter: Routes = [
  {
    path: "base", //base
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [{
      path: "",
      component: CenterUserComponent,
      children: [{
        path: "user",
        component: ListUserComponent,
      }]
    },
      {
        path: "",
        component: CenterTaskComponent,
        children: [{
          path: "task",
          component: ListTaskComponent,
        }]
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(BaseRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class BaseRouterModule {

}
