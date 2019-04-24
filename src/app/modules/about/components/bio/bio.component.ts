import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  age: number;
  constructor() { }

  ngOnInit() {
    let dob = new Date('March 21, 1988').getTime();
    let curr = Date.now(); 
    
    this.age = new Date(curr - dob).getFullYear() - 1970;
  }

}
