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

  ngAfterViewInit() {
    setTimeout(function(){
      var url = new URL(window.location.href);
      var scrollTo = url.href.split('?scrollTo=')[1];
      console.log(scrollTo)
      document.getElementById(scrollTo).scrollIntoView({behavior: 'smooth'}); 
    }, 1000);
  }

  formatTitle(title: string) {
    return title.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()
  }

}
