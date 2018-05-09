/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 01/03/2017.
 */
import {Component, Input} from '@angular/core'
import { MdDialogRef } from '@angular/material'
import {User} from "../../../../models/core";

@Component({
  selector: 'form-user',
  templateUrl: './form.users.component.html'
})

export class FormUserComponent{

  user = new User();

  constructor(public dialogRef: MdDialogRef<FormUserComponent>){}

  @Input()
  set ModelUser(user){
    this.user["method"] = "post";
    if(user){
      this.user = user;
      this.user['method'] = "put";
    }
  }

  onSubmit(form){
    console.log(this.user);
    // console.log(this.user);
  }
}
