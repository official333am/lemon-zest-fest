import { Component, OnInit, Renderer2 } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  public lemon: HTMLElement;
  public rot = 360;
  //

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.lemon = document.getElementById("lemon");
  }

  public spinLemon(): void {
    this.renderer.setStyle(this.lemon, 'transform', 'rotate(' + this.rot + 'deg)');
    this.rot += 360;
  }

  public get isToggleEnabled(): boolean {
    return $(window).width() <= 991;
  }

}
