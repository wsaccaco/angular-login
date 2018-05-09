import {Routes, RouterModule} from "@angular/router"
import {LoginBaseComponent} from './login/core'
import {AuthGuard} from './services/auth.guard.service'
import { PageNotFoundComponent } from './page.not.found.component'

const APP_ROUTES:Routes = [
  {
    path: "login",
    component: LoginBaseComponent
  },
  {
    path: "upload",
    loadChildren: 'app/upload/upload.module#UploadModule'
  },
  {
    path: "base",
    loadChildren: 'app/base/base.module#BaseModule'
  },{
    path: "**",
    component: PageNotFoundComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


