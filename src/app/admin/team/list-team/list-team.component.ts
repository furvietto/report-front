import { UserService } from './../../../services/user.service';
import { ViewUserComponent } from './../../dialog/view-user/view-user.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { LoginService } from 'src/app/services/login.service';
import { TeamService } from 'src/app/services/team.service';
import { ShowMessageComponent } from '../../dialog/show-message/show-message.component';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit{

  ngOnInit(): void {
    if (this.loginService.stringGetRole() != "ADMIN") {
      let dialogRef = this.dialog.open(ShowMessageComponent,{
        data: "NON CE PROVà, CHIAMO I CARABINIERI!!!!!!"
      });
      this.router.navigateByUrl("/")
    }
    this.loadTeams();
  }

  constructor (private teamService: TeamService,
    public dialog:MatDialog,
    private loginService:LoginService,
    private router: Router,
    private userService:UserService
    ) {}


  teams: Team[] = [];

  loadTeams(): void {
    this.teamService.list().subscribe(
      data => {
        this.teams = data;
      },
      err => console.log(err)
    )
  }

  view(teamId:number): void {
    this.userService.listUserByTeamId(teamId).subscribe(
      user => {
        if (user.length == 0) {
           this.dialog.open(ShowMessageComponent,{
            data: "Nessun utente collegato con il team"
          });
        }else{
          let dialogViewUser = this.dialog.open(ViewUserComponent,{
            data: user
          });
          dialogViewUser.afterClosed().subscribe(
            result => {
              if (result != undefined) {
                this.userService.assignTeamLeader(result).subscribe(
                  result => {
                    this.dialog.open(ShowMessageComponent,{
                      data: result.message
                    });
                  }
                )
              }
            }
          )
        }
      }
    )
  }

}
