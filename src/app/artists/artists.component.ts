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
        pHeight: 3440,
        gHeight: 2390
      };
    } else if ($(window).width() <= 400) {
      return {
        pHeight: 3125,
        gHeight: 2130
      };
    } else if ($(window).width() <= 450) {
      return {
        pHeight: 2995,
        gHeight: 2070
      };
    } else if ($(window).width() <= 600) {
      return {
        pHeight: 2770,
        gHeight: 1890
      };
    } else if ($(window).width() <= 1024) {
      return {
        pHeight: 2610,
        gHeight: 1760
      };
    } else {
      return {
        pHeight: 2610,
        gHeight: 1760
      };
    }
    // return {
    //   pHeight: (Math.ceil($(window).width()/50)*50)*(-2.8)+4630,
    //   gHeight: Math.ceil($(window).width()/50)*50,
    // }
  }

}
