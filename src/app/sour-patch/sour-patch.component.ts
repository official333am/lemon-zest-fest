import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sour-patch',
  templateUrl: './sour-patch.component.html',
  styleUrls: ['./sour-patch.component.css']
})
export class SourPatchComponent implements OnInit {
  public messages;

  constructor(
    private firebaseService: FirebaseService
  ) { 
    this.messages = this.firebaseService.messages;
  }

  ngOnInit() {
    var form = document.getElementById("sour-patch-form");
    form.addEventListener('submit', this.submitCallback.bind(this));
  }

  public submitCallback(event: Event): void {
    event.preventDefault();

    this.firebaseService.addMessage({
      date: (new Date()).toString(),
      message: (<HTMLInputElement>document.getElementById("sour-patch-message")).value,
      name: (<HTMLInputElement>document.getElementById("sour-patch-name")).value
    });

    (<HTMLInputElement>document.getElementById("sour-patch-message")).value = "";
    (<HTMLInputElement>document.getElementById("sour-patch-name")).value = "";
    (<HTMLInputElement>document.getElementById("form-bottom")).scrollIntoView();
  }

}
