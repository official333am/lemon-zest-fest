import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public profiles = [
    {
      facebook: 'https://www.instagram.com/lemonzestfest/',
      instagram: 'https://www.instagram.com/lemonzestfest/',
      profilePath: '../../assets/images/profiles/sana.jpg',
      role: 'Chief Lemon Zester',
      name: 'Sana',
      twitter: 'https://www.instagram.com/lemonzestfest/'
    },
    {
      facebook: 'https://www.instagram.com/lemonzestfest/',
      instagram: 'https://www.instagram.com/lemonzestfest/',
      profilePath: '../../assets/images/profiles/mike.jpg',
      role: 'Executive Lemon Squeezer',
      name: 'Mike',
      twitter: 'https://www.instagram.com/lemonzestfest/'
    },
    {
      facebook: 'https://www.instagram.com/lemonzestfest/',
      instagram: 'https://www.instagram.com/lemonzestfest/',
      profilePath: '../../assets/images/profiles/rohith.jpg',
      role: 'Head of Lemonheads',
      name: 'Rohith',
      twitter: 'https://www.instagram.com/lemonzestfest/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
