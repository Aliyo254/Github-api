import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable(
  {
  providedIn: 'root'
}
)
export class ProfileService {

  private username: string;
  private clientid = "da64bbd6f175275ff706"
  private clientsecret = "d15ca767de6d1a6d3662c18d6f94473c411c2df6"
  


  constructor(private http:HttpClient) { 
    console.log("service is okay");
    this.username='Madonahs';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
  }


  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }
  updateProfile(username:string){
    this.username = username;
  }
}
