import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../../shared/services/github/github.service';
import { take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { CommonService } from '../../../shared/services/common/common.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent implements OnInit {
	public start: number = 1;
	public end: number = 0;
	public page: number = 1;
	public perPageCount: number = 10;
	public username: string = "";
	public repoData: any = [{}];
	public mouseOvered: boolean = false; 
	public reposCount: number = 0;
	
	constructor(
		private activatedRoute: ActivatedRoute, 
		private githubService: GithubService,
		private commonService: CommonService,
		private router: Router) {
		this.page = +this.activatedRoute.snapshot.queryParams['page'] || 1;
		this.username = this.activatedRoute.snapshot.parent?.params['id'];
	}

	ngOnInit(): void {
		this.fetchRepos();
		this.commonService.userData$.subscribe(
			(userData) => this.reposCount = userData?.public_repos
		)
	}

	private fetchRepos(): void {
		this.githubService.getRepos(this.page, this.perPageCount, this.username)
		.pipe(take(1))
		.subscribe(
			(reposData) =>  {
				this.repoData = reposData;
				this.end = (this.start - 1) + this.repoData.length;
				this.reevaluateValues(this.page);
			}
		)
	}

	public handlePageEvent(e: PageEvent): void {
		this.page = e.pageIndex + 1;
		this.reevaluateValues(this.page);
		this.fetchRepos();
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: {
				page: this.page
			},
			queryParamsHandling: 'merge'
		});
	}

	private reevaluateValues(page: number): void {
		this.start = (this.page - 1) * 10 + 1;
	}
}
