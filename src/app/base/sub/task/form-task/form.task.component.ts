/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 03/03/2017.
 */
import {Component, Input} from '@angular/core'
import {MdDialogRef} from '@angular/material'
import {Task} from "../../../../models/core";

@Component({
  selector: 'form-task',
  templateUrl: './form.task.component.html',
  styleUrls: ['./form.task.component.css']
})

export class FormTaskComponent{
  task:Task = new Task();

  constructor(public dialogRef: MdDialogRef<FormTaskComponent>){}

  @Input()
  set modelTask(task){
    if(task){
      this.task = task;
      console.log(this.task)
    }
  }

  onSubmit(form){
    console.log(form);
  }

}
