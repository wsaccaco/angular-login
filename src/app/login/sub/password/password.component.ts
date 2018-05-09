import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../animate';
@Component({
  selector : 'login-password',
  templateUrl: './password.component.html',
  animations: [slideInDownAnimation]
})

export class PasswordComponent{
  @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
}
