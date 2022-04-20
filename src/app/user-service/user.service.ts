import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  newUser: User | undefined;
  newRepos:Repository | undefined;

  constructor(private http: HttpClient) {

  }

  // HttpInterceptor

  searchUSer(searchName: string) {
    interface Response {
      login: string;
      url:string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    };

    let url = `${environment.homeURL}users/${searchName}`
    return this.http.get(url, {
      headers: {
        Authorization: `token ${environment.apiKey}`
      }
    });
  }
  getRepository(searchName){
    interface Repository{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    let url = `${environment.homeURL}users/${searchName}/repository`
    return this.http.get(url, {
      headers: {
        Authorization: `token ${environment.apiKey}`
      }
    });
}
}