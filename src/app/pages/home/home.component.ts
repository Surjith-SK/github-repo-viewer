import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public username: string = '';

	constructor(private commonService: CommonService) {}

	ngOnInit(): void {
		this.commonService.isUserNamePresent$.next(false);
	}


}
