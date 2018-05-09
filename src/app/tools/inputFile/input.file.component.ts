/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 20/03/2017.
 */
import {Component} from '@angular/core'

@Component({
  selector: 'input-file',
  templateUrl: './input.file.component.html',
  styleUrls: ['./input.file.component.css']
})

export class InputFileComponent{


  fileInputText: string = "";

  constructor(){}

  changeState(e){
    console.log(e);
  }

  changeText(e){
    let str = e.value;
    let i;
    if (str.lastIndexOf('\\')) {
      i = str.lastIndexOf('\\') + 1;
    } else if (str.lastIndexOf('/')) {
      i = str.lastIndexOf('/') + 1;
    }
    this.fileInputText = str.slice(i, str.length);
  }

}
