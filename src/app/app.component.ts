import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor( private _elRef: ElementRef ) { }
  
  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.carousel.carousel-slider')
      .carousel({fullWidth: true});
  }
}
