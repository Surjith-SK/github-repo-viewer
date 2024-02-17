import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
	public isUserNamePresent$ = new BehaviorSubject<boolean>(false);

	constructor(private commonService: CommonService) {
		this.isUserNamePresent$ = this.commonService.isUserNamePresent$;
	}


}
