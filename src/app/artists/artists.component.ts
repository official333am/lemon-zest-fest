import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public get iframeHeights(): any {
    if ($(window).width() <= 350) {
      return {
        pHeight: 3650,
        gHeight: 2700
      };
    } else if ($(window).width() <= 400) {
      return {
        pHeight: 3350,
        gHeight: 2400
      };
    } else if ($(window).width() <= 450) {
      return {
        pHeight: 3250,
        gHeight: 2300
      };
    } else if ($(window).width() <= 600) {
      return {
        pHeight: 2950,
        gHeight: 2100
      };
    } else if ($(window).width() <= 1024) {
      return {
        pHeight: 2750,
        gHeight: 1900
      };
    } else {
      return {
        pHeight: 2750,
        gHeight: 1900
      };
    }
    // return {
    //   pHeight: (Math.ceil($(window).width()/50)*50)*(-2.8)+4630,
    //   gHeight: Math.ceil($(window).width()/50)*50,
    // }
  }

}
