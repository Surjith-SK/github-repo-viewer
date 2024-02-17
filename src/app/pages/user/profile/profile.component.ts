import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../shared/services/github/github.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
	private username: string = '';
	public userdata: any = {};
	constructor(
		private activatedRoute: ActivatedRoute,
		private githubService: GithubService
		) {
			this.username = this.activatedRoute.snapshot.params['id'];
		}

	ngOnInit(): void {
		this.getUserdata();
	}

	private getUserdata(): void {
		this.githubService.getUserData(this.username).pipe(
			take(1)
		).subscribe(
			(userdata) => {
				this.userdata = userdata;
				console.log(this.userdata)
			}
		)
	}

}
