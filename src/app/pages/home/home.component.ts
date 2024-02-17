import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { GithubService } from '../../shared/services/github/github.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public username: string = '';
	public userList: any[] = [];

	constructor(
		private commonService: CommonService,
		private githubService: GithubService) {}

	ngOnInit(): void {
		this.commonService.isUserNamePresent$.next(false);
	}

	public searchUsers(): void {
		if(this.username.length >= 3) {
			this.githubService.searchUser(this.username).pipe(
				debounceTime(100)
			).subscribe(
				(userLists) => {
					this.userList = userLists?.items;
					console.log(this.userList);
				}
			)
		} else {
			this.userList = [];
		}

	}


}
