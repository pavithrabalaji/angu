import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

demotitle;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
  this.demotitle = this.myservice.showTitle();
  }

}
