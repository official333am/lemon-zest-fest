import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public profiles = [
    {
      facebook: 'https://www.facebook.com/sana.ras.shah',
      instagram: 'https://www.instagram.com/sanarshah/',
      profilePath: '../../assets/images/profiles/sana.jpg',
      role: 'Chief Creative Director',
      name: 'Sana',
      twitter: 'https://twitter.com/sanarshah'
    },
    {
      facebook: 'https://www.facebook.com/michaelquarantillo',
      instagram: 'https://www.instagram.com/therealmikewave/',
      profilePath: '../../assets/images/profiles/mike.jpg',
      role: 'Sponsorship Coordinator',
      name: 'Mike',
      twitter: 'https://twitter.com/therealmikewave'
    },
    {
      facebook: 'https://www.facebook.com/rohithjsebastian',
      instagram: 'https://www.instagram.com/officialblase/',
      profilePath: '../../assets/images/profiles/rohith.jpg',
      role: 'Logistics Director',
      name: 'Rohith',
      twitter: 'https://www.twitter.com/officialblase/'
    },
    {
      facebook: 'https://www.facebook.com/sarwat.kazmi.3',
      instagram: 'https://www.instagram.com/sarwat.kazmi/',
      profilePath: '../../assets/images/profiles/sarwat.jpg',
      role: 'Social Media Producer',
      name: 'Sarwat',
      twitter: 'https://twitter.com/sarwhatkazmi'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
