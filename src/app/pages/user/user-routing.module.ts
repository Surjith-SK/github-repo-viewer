import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
	{
		path: ':id',
		children: [
			{
				path: 'profile',
				component: ProfileComponent,
			},
			{
				path: 'repo',
				component: RepositoriesComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
