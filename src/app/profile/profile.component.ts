import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
