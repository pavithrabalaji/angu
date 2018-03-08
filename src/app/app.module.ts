import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { MyserviceService } from './myservice.service';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UformComponent } from './uform/uform.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerelementComponent } from './serverelement/serverelement.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProjectsComponent,
    HomeComponent,
    UserComponent,
    UformComponent,
    CockpitComponent,
    ServerelementComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
