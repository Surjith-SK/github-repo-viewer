import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { ProfileBodyComponent } from './profile/profile-body/profile-body.component';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    RepositoriesComponent,
    ProfileHeaderComponent,
    ProfileBodyComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
	SharedModule
  ]
})
export class UserModule { }
