import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../shared/services/common/common.service';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrl: './profile-body.component.scss'
})
export class ProfileBodyComponent implements OnInit {	
	public userdata: any = {};

	constructor(private commonService: CommonService) {}
	
	ngOnInit(): void {
		this.fetchData()
	}

	private fetchData(): void {
		this.commonService.userData$.subscribe(
			(userData) => this.userdata = userData
		)
	}
}
