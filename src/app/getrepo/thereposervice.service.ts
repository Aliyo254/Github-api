import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class TherepoService {
  
  private repository!: string;
  private clientId = "a64bbd6f175275ff706";
  private clientSecret = "d15ca767de6d1a6d3662c18d6f94473c411c2df6";

  // getProfileRepos() {
  //   throw new Error('Method not implemented.');
  // }
  

  constructor(private http: HttpClient) { }

  getProfileRepos(){
    return this.http.get(`https://api.github.com/search/repositories?q=${this.repository}&client_secret=${this.clientSecret}`).pipe(map(res => res))

  }
  updateProfile(repository: string) {
    this.repository=repository;
  }
  // updateP(repository)
}
