import { Component, OnInit } from '@angular/core';
import projectsData from '../../../assets/data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsData: any;

  constructor() { }

  ngOnInit() {
    this.projectsData = projectsData;
  }

}
