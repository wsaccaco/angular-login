/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 20/03/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UploadComponent} from './upload.component'
import {AuthGuard} from "../services/auth.guard.service";

const UploadRouter: Routes = [
  {
    path: 'upload',
    component : UploadComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(UploadRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class UploadRouterModule{}
