import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 constructor(private http: Http) { }
   httpdata;
   ngOnInit() {
      this.http.get("http://localhost:3000/getusers").
      map(
         (response) =>response.json()
      ).
      subscribe(
         (data) => {this.displaydata(data);}
      )
   }
   displaydata(data) {this.httpdata = data;}

}
