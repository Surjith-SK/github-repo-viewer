import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
	public isUserNamePresent$ = new BehaviorSubject<boolean>(false);
	public userData$ = new BehaviorSubject<any>({});
  constructor() { }



}
