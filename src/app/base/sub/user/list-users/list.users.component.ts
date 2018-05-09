/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 27/02/2017.
 */

import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import { UserServices } from './../../../../services/core'
import {MdDialog} from '@angular/material';
import {EditUserComponent, NewUserComponent} from './../core'

@Component({
  selector: 'list-user',
  templateUrl: './list.user.component.html',
  styleUrls: ['./list.user.component.css']
})

export class ListUserComponent implements OnInit{
  usersStore = [];
  user = {};
  constructor(private userService: UserServices, public modalUser: MdDialog){
    this.usersStore = userService.listUsers();
  }

  openModalForm(id) {
    let ActionUserForm;
    let user = {};
    if(id == 'new'){
      ActionUserForm = NewUserComponent;
    }else{
      user = this.userService.find(id);
      ActionUserForm = EditUserComponent;
    }

    let dialogRef = this.modalUser.open(ActionUserForm, {
      data: user,
      width : '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  users = [];
  filters( search ){
    if(search == "")
      return this.users = this.usersStore;
    this.users = this.usersStore.filter((item)=>{
        return item.first_name.indexOf(search) != -1 ||
                item.last_name.indexOf(search) != -1 ||
          item.email.indexOf(search) != -1;
    });
    return this.users;
  }

  ngOnInit(){
    this.users = this.usersStore;
  }

}
