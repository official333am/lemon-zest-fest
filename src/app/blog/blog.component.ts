import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public writeUps;

  constructor(
    private firebaseService: FirebaseService
  ) { 
    this.writeUps = this.firebaseService.writeUps;
  }

  ngOnInit() {
  }

}
