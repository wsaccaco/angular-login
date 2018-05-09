import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { PageNotFoundComponent } from './page.not.found.component'

import {LoginModule} from './login/login.module'
import {BaseModule} from './base/base.module'
import {UploadModule} from "./upload/upload.module";

import { routing } from './app.routers';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    LoginModule,
    BaseModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
