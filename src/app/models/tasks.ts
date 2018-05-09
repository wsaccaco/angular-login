/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 09/03/2017.
 */
export class Task{
  constructor(
    public id? : number,
    public campaign? : string,
    public date? : Date,
    public brand? : string,
    public status? : string,
    public webservice? : string
  ){}
}
