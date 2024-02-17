import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const declarations = [
	HeaderComponent
];
const material = [
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule
]
@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
	...material
  ],
  exports: [
	...declarations,
	...material
  ]
})
export class SharedModule { }
