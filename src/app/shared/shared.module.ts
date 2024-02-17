import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { RouterModule } from '@angular/router';
import { HoverDirective } from './directives/hover/hover.directive';


const declarations = [
	HeaderComponent,
	HoverDirective
];
const material = [
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatTabsModule,
	MatIconModule,
	MatPaginatorModule,
	MatAutocompleteModule,
	MatSelectModule,
	MatProgressBarModule
]
@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    CommonModule,
	RouterModule,
	...material
  ],
  exports: [
	...declarations,
	...material
  ]
})
export class SharedModule { }
