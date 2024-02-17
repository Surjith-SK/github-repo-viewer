import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CommonService } from '../services/common/common.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

	constructor(private commonService: CommonService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.commonService.setLoader();
		return next.handle(request).pipe(
			finalize(() => this.commonService.unsetLoader())
		);
	}
};
