/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 02/03/2017.
 */
import { Component } from '@angular/core'
import { TaskServices } from './../../../../services/core'
import { MdDialog } from '@angular/material'
import {EditTaskComponent, NewTaskComponent} from './../core'

@Component({
  selector: 'list-task',
  templateUrl: './list.task.component.html',
  styleUrls: ['./list.task.component.css']
})

export class ListTaskComponent{

  tasks = [];
  tasksStore = [];

  constructor(private taskService: TaskServices, public mdDialog: MdDialog){
    this.tasksStore = taskService.get();
    console.log("list-task");
  }

  openModalForm(id){
    let ActionUserForm;
    let user = {};
    if(id == 'new'){
      ActionUserForm = NewTaskComponent;
    }else{
      user = this.taskService.find(id);
      ActionUserForm = EditTaskComponent;
    }

    let dialogRef = this.mdDialog.open(ActionUserForm, {
      data: user,
      width : '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  filters( search ){
    if(search == "")
      return this.tasks = this.tasksStore;
    this.tasks = this.tasksStore.filter((item)=>{
      return item.campaign.indexOf(search) != -1 ||
        item.date.indexOf(search) != -1 ||
        item.brand.indexOf(search) != -1 ||
        item.status.indexOf(search) != -1;
    })
    return this.tasks;
  }

  ngOnInit(){
    this.tasks = this.tasksStore;
  }

}
