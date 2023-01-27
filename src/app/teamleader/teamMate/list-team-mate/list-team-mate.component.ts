import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-team-mate',
  templateUrl: './list-team-mate.component.html',
  styleUrls: ['./list-team-mate.component.css']
})
export class ListTeamMateComponent implements OnInit{

  constructor(
    private userService:UserService,
    public dialog:MatDialog,
    private loginService:LoginService) {}

    ngOnInit(): void {
      this.loadUsersTeamLeader();
  }



  users: User[] = [];

  loadUsersTeamLeader(): void {
    let accountId = this.loginService.getAccountId();
    this.userService.listUsersTeamLeader(accountId).subscribe(
      data => {
        this.users = data;
      },
      err => console.log(err)
    )
  }

}
