/**
 * Created by Waldo J. Saccaco (w.saccaco@gmail.com) on 20/03/2017.
 */
import {Component} from '@angular/core';
import { UploadService } from './../services/core';
import {Headers, RequestOptions, Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {environment} from 'environments/environment';

@Component({
  selector : 'upload-component',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent{
  uploads = [];
  file = {};
  inputFile = {
    name: "",
    disabled : false,
    progress: 0.0,
    mode : "determinate"
  };
  AWS = window['AWS'];
  constructor(
    private uploadService: UploadService,
    private http: Http,
    private router: Router,
    public authService: AuthService){
    this.getUploads();
  }


  upload(files) {

    this.AWS.config.update({
      accessKeyId: 'AKIAIPSDVWCXQJ3LU75Q', // AKIAJYW54THXBBVVCDCA
      secretAccessKey: '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', //WE9WqcU4tno8IR3GcZPYH2SFx9U3eAcWiIJTsdxO
      region: 'us-east-1',
    });

    this.AWS.config.apiVersions = {
      rekognition: '2016-06-27',
    };

    const s3BucketName = environment.BucketName;
    const s3 = new this.AWS.S3({
      params: {
        Bucket: s3BucketName,
        Region: "us-east-1"
      }
    });
    const s3file = files[0];


    if (s3file) {
      var x = s3.putObject({
        Key: environment.path + s3file.name,
        ContentType: s3file.type,
        Body: s3file,
        ACL: "public-read"
      }, (err, data) => {
        if (err) console.log(err, err.stack);
        else{
          console.log(data);
          setTimeout(()=>{
            this.getUploads();
          }, 5000)
        }
        this.inputFile.disabled = false;
        this.inputFile.progress = 0;
      }).on('httpUploadProgress', (data) => {
        this.inputFile.progress = (data.loaded * 100)/data.total;
      });
    }

  }

  headers(){
    let headers = new Headers();
    headers.append('x-api-key', 'rDouzTIuog3ZORD4yhZ9B81E1nNtgW6N3ER5dvcW');
    return {headers: headers};
  }

  getUploads(){
    console.log(environment);
    return this.http.get(`https://${environment.subdomain}.execute-api.us-east-1.amazonaws.com/${environment.stage}/scan_table_allpages/${environment.table}`, this.headers())
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => this.uploads = data,
        error => console.log(error)
      )
  }

  deleteItem(item){

    return this.http.put(`https://${environment.subdomain}.execute-api.us-east-1.amazonaws.com/${environment.stage}/update_item/${environment.table}/id_plantilla/${item.id_plantilla}`, {status: false}, this.headers())
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => {
          this.uploads.find((_item, index) => {
            console.log(_item, index);
            if (_item.id_plantilla == item.id_plantilla) {
              this.uploads[index] = data;
              return true;
            }
          })
        },
        error => console.log(error)
      )
  }

  processItem(item, el){
    if(!item) return;
    el.setAttribute("disabled", "");
    return this.http.get(`https://${environment.subdomain}.execute-api.us-east-1.amazonaws.com/${environment.stage}/process/${item.id_plantilla}`, this.headers())
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => {
          el.removeAttribute("disabled");
          this.uploads.find((_item, index) => {
            if (_item.id_plantilla == item.id_plantilla) {
              this.uploads[index] = data;
              return true;
            }
          })
        },
        error => console.log(error)
      )
  }

  onSubmit(e, file){
    e.stopPropagation();
    let fileList: FileList = e.srcElement.name.files;
    this.inputFile.disabled = true;
    this.upload(fileList);
  }

  getName(url){
    return url.split("\\").reverse()[0];
  }

  onChangeFile(e){
    this.inputFile.name = this.getName(e.target.value);
  }

  logout(){
    this.router.navigate(['/login']);
    //this.authService.logout();
  }

}
