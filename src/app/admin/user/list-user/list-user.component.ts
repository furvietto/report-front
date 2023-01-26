import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from './../../../services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { ShowMessageComponent } from '../../dialog/show-message/show-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  constructor (public userService:UserService, private loginService:LoginService, public dialog:MatDialog, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.stringGetRole() != "ADMIN") {
      let dialogRef = this.dialog.open(ShowMessageComponent,{
        data: "NON CE PROVà, CHIAMO I CARABINIERI!!!!!!"
      });
      this.router.navigateByUrl("/")
    }
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
