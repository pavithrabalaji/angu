import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UformComponent } from './uform/uform.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'users', component: UsersComponent},
	{ path: 'user/:id', component: UserComponent},
	{ path: 'projects', component: ProjectsComponent},
	{ path: 'uform', component: UformComponent},
];