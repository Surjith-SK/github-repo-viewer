import { CommonService } from './../services/common/common.service';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification/notification.service';
import { TOASTR_MESSAGES } from '../helpers/messages/toastr.messages';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

   constructor(
      private router: Router,
	  private notificationService: NotificationService,
	  private commonService: CommonService
      ){}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(request).pipe(
        retry(1),
        catchError((error: any) => {
         if (error.status === 404) {
			//currently we are considering only get api and thus it is straight forward. 
			this.notificationService.error(TOASTR_MESSAGES.noUsername, '');
			this.commonService.isUserNamePresent$.next(false)
            setTimeout(() => {
				this.router.navigate([`/`]);
			}, 3000);
         } else if(error.status === 500) {
			this.notificationService.error(TOASTR_MESSAGES.serverError, '')
         } else if(error.status === 400) {
            return throwError(() => new Error(error.error?.message || error.message))
         }
         return throwError(() => new Error(error.error?.message || error.message));
        })
      );    
   }
}
