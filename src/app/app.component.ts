import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showNav: boolean;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((url:any) => {
      if( this.route.url === '/home' || this.route.url === '/') {
         this.showNav = false;
      } else {
        this.showNav = true;
      }
    });
  }
}
