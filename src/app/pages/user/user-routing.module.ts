import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user.component';
import { ProfileBodyComponent } from './profile/profile-body/profile-body.component';

const routes: Routes = [
	{
		path: ':id',
		children: [
			{
				path: '',
				component: UserComponent,
				children: [
					{
						path: 'profile',
						component: ProfileBodyComponent,
					},
					{
						path: 'repositories',
						component: RepositoriesComponent
					}
				]
			},			
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
