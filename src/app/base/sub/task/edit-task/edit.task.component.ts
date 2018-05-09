/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 03/03/2017.
 */
import {Component} from '@angular/core'
import {MdDialogRef} from '@angular/material'
import {Task} from "../../../../models/core";

@Component({
  selector : 'edit-task',
  template : '<form-task [modelTask]="task"></form-task>'
})

export class EditTaskComponent{
  task = new Task();
  constructor(private dialogRef: MdDialogRef<EditTaskComponent>){
    this.task = dialogRef.config.data;
  }

}
