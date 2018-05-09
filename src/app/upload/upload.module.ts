/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 20/03/2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms'
import {UploadComponent} from "./upload.component";
import {UploadRouterModule} from "./upload.router.module";
import {CommonModule} from "@angular/common";
import {MaterialModule} from '@angular/material'
import {InputFileComponent} from '../tools/inputFile/input.file.component'
import {UploadService} from './../services/core'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations:[
    UploadComponent,
    InputFileComponent
  ],
  imports:[
    CommonModule,
    UploadRouterModule,
    MaterialModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    UploadService
  ]
})

export class UploadModule{}
