/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 09/03/2017.
 */
export class Model{
  attributes = {};
  constructor(attr){
    Object.assign(this.attributes, attr);
  }

  setObject(object){
    return Object.assign(this.attributes, object)
  }

}
