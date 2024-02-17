import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
	public isUserNamePresent$ = new BehaviorSubject<boolean>(false);
  constructor() { }



}
