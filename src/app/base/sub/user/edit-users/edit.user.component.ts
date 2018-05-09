/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 01/03/2017.
 */
import {Component} from '@angular/core'
import { MdDialogRef } from '@angular/material'

@Component({
  selector: 'edit-user',
  template: '<form-user [ModelUser]="user"></form-user>'
})

export class EditUserComponent{
  user = {};
  constructor(public dialogRef: MdDialogRef<EditUserComponent>) {
    this.user = dialogRef.config.data;
  }

  save(){
    console.log('save edit-user');
  }

}

