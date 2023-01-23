import { UserService } from './../../../services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  constructor (public userService:UserService) {}

  ngOnInit(): void {
    this.loadUsers();
}

users: User[] = [];

loadUsers(): void {
  this.userService.list().subscribe(
    data => {
      console.log(data);
      this.users = data;
    },
    err => console.log(err)
  )
}

}
