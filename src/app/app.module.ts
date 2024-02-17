import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ToastrModule.forRoot({
		timeOut: 5000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
	SharedModule
  ],
  providers: [
    provideAnimationsAsync(),
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpErrorInterceptor,
		multi: true
	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
