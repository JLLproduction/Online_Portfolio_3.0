import { Component, OnInit } from '@angular/core';
import { Animations } from "../../shared/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: Animations.animations
})
export class AboutComponent implements OnInit {

  halfHeight: number;
  halfWidth: number;

  constructor() { }

  ngOnInit() {
    this.checkWidth();
  }

  checkWidth() {
    this.halfHeight = (window.innerHeight / 2);
    this.halfWidth = (window.innerWidth  / 2) - 100;
  }

  adjustImage() {
    const image = document.getElementById('profilePic');

    image.style.left = (window.innerWidth  / 2) - 100 + 'px';
  }

}
