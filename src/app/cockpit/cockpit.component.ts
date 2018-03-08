import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
serverElements =[];
name='';
content='';


  constructor() { }

  ngOnInit() {
  }
Addserver()
{
	this.serverElements.push({
	type:'server',
	name :this.name,
	content : this.content,
	});
}
Printserver()
{
this.serverElements.push({
	type:'bluprint',
	name :this.name,
	content : this.content,
	});
}
}
