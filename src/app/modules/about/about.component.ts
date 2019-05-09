import { Component, OnInit } from '@angular/core';
import { Animations } from "../../shared/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: Animations.animations
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
