import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  basePath = '/images';                       //  <<<<<<<
  downloadableURL = '';                      //  <<<<<<<
  task: AngularFireUploadTask; 

  constructor(private fireStorage: AngularFireStorage, private firebaseService: FirebaseService) { }

  ngOnInit() {
    var form = document.getElementById("upload-form");
    form.addEventListener('submit', this.submitCallback.bind(this));
  }

  async onFileChanged(event) {
    const file = event.target.files[0];
    if (file) {
       const filePath = `${this.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
       this.task =  this.fireStorage.upload(filePath, file);    // upload task
 
       // this.progress = this.snapTask.percentageChanges();
 
 
       (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });  // <<< url is found here
 
 
 
     } else {  
       alert('No images selected');
       this.downloadableURL = ''; }
 
 
 
  }

  public submitCallback(event: Event): void {
    event.preventDefault();

    this.firebaseService.addWriteUp({
      date: (new Date()).toString(),
      writeUp: (<HTMLInputElement>document.getElementById("upload-write-up-1")).value,
      pullQuote: (<HTMLInputElement>document.getElementById("upload-pull-quote")).value,
      writeUp2: (<HTMLInputElement>document.getElementById("upload-write-up-2")).value,
      author: (<HTMLInputElement>document.getElementById("upload-author")).value,
      title: (<HTMLInputElement>document.getElementById("upload-title")).value,
      imageURL: this.downloadableURL
    });

    (<HTMLInputElement>document.getElementById("upload-write-up-1")).value = "";
    (<HTMLInputElement>document.getElementById("upload-pull-quote")).value = "";
    (<HTMLInputElement>document.getElementById("upload-write-up-2")).value = "";
    (<HTMLInputElement>document.getElementById("upload-author")).value = "";
    (<HTMLInputElement>document.getElementById("upload-title")).value = "";
    this.downloadableURL = "";
    (<HTMLInputElement>document.getElementById("form-bottom")).scrollIntoView();
  }

}
