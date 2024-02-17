import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private env = environment;	
  constructor(private http: HttpClient) { }

  public getUserData(username: string): Observable<any> {
	return this.http.get(`${this.env.apiUrl}users/${username}`);
  }

  public getRepos(page: number, count: number, username: string): Observable<any> {
	let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);
	queryParams = queryParams.append("per_page", count);
	return this.http.get(`${this.env.apiUrl}users/${username}/repos`, {params: queryParams})
  }

  public searchUser(username: string): Observable<any> {
	let queryParams = new HttpParams();
    queryParams = queryParams.append("q", `${username}+in:login`);
	return this.http.get(`https://api.github.com/search/users?q=${username}+in:login`)
  }
}
