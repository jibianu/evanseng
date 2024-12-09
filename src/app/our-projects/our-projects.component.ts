import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COMPLETED_PROJECTS, ONGOING_PROJECTS } from '../shared/configs/general-values';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent {

  public projectsList:any;
  public pageHeading:string;
  public subHeading:string

  constructor(private router:Router){
    this.pageHeading = this.router.url == '/completed-projects' ? 'COMLETED PROJECTS' : 'ONGOING PROJECTS';
    this.subHeading = this.router.url == '/completed-projects' ? 'List of Successfully Completed Projects' : 'List of Ongoing Projects';
    this.projectsList = this.router.url == '/completed-projects' ? COMPLETED_PROJECTS : ONGOING_PROJECTS; 
  }

}
