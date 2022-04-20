import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { User } from '../user';
import { Repository } from '../repository/repository';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User | undefined;
  repo:Repository | undefined;

  constructor(public myService: UserService, private repoService: UserService) { }
  

  
  

  ngOnInit(): void {
  }

}
