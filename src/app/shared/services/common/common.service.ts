import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
	public isUserNamePresent$ = new BehaviorSubject<boolean>(false);
	public userData$ = new BehaviorSubject<any>({});
	private isLoading$ = new BehaviorSubject<boolean>(false);
    
	constructor() { }

    public setLoader(): void {
		this.isLoading$.next(true);
	}

	public unsetLoader(): void {
		this.isLoading$.next(false);
	}

	public getLoader(): Observable<boolean> {
		return this.isLoading$.asObservable();
	}


}
