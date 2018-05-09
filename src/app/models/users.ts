/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 08/03/2017.
 */

export class User{

  constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public password?: string,
    public status?: boolean
  ){
    this.status = false
  }

}
