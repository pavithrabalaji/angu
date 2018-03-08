import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uform',
  templateUrl: './uform.component.html',
  styleUrls: ['./uform.component.css']
})
export class UformComponent implements OnInit {

  constructor() { }

  @ViewChild('f') signupForm: NgForm;
  
  ngOnInit() {
  }
  onSubmit(f)
  {
  console.log(this.signupForm);
  }

}
