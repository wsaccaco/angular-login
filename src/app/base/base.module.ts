/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 27/02/2017.
 */
// import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MaterialModule} from '@angular/material'
import { CommonModule }   from '@angular/common';
import {BaseRouterModule} from './base.router.modules'
import {BaseComponent} from './core'
import {ListUserComponent, EditUserComponent, CenterUserComponent, FormUserComponent, NewUserComponent} from "./sub/user/core";
import { CenterTaskComponent, ListTaskComponent, EditTaskComponent, FormTaskComponent, NewTaskComponent } from './sub/task/core'
import {UserServices, TaskServices, AuthService, AuthGuard} from './../services/core'

@NgModule({
  declarations: [
    BaseComponent,
    ListUserComponent,
    EditUserComponent,
    CenterUserComponent,
    FormUserComponent,
    CenterTaskComponent,
    ListTaskComponent,
    EditTaskComponent,
    FormTaskComponent,
    NewTaskComponent,
    NewUserComponent
  ],
  imports: [
    BaseRouterModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    UserServices,
    TaskServices,
    AuthGuard,
    AuthService
  ],
  entryComponents:[
    EditUserComponent,
    EditTaskComponent,
    NewTaskComponent,
    NewUserComponent
  ]
})

export class BaseModule{

}
