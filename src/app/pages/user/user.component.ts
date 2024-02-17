import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../shared/services/github/github.service';
import { CommonService } from '../../shared/services/common/common.service';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
	private username: string = '';
	public userdata: any = {};
	public isLoading$ = new Observable<boolean>();

	constructor(
		private activatedRoute: ActivatedRoute,
		private githubService: GithubService,
		private commonService: CommonService
		) {
			this.username = this.activatedRoute.snapshot.params['id'];
		}

	ngOnInit(): void {
		this.getUserdata();
		this.isLoading$ = this.commonService.getLoader();
	}

	private getUserdata(): void {
		this.githubService.getUserData(this.username).pipe(
			take(1)
		).subscribe(
			(userdata) => {
				this.userdata = userdata;
				this.commonService.isUserNamePresent$.next(!!this.userdata);
				this.commonService.userData$.next(this.userdata);
				console.log(this.userdata)
			}
		)
	}

}
