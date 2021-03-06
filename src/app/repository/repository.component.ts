import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile-service.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']

})
export class RepositoryComponent implements OnInit {
  profile:any;
  repos:any;
  username!:string;
  
 


  constructor(private profileService: ProfileService) { 

  }

  submitInput(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile=profile;
    }), 
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos= repos;
    })
    
  }

  



  ngOnInit(): void {
  }

}