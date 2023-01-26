import { TeamService } from './../../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { MatDialogRef } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-assign-to-team',
  templateUrl: './assign-to-team.component.html',
  styleUrls: ['./assign-to-team.component.css']
})
export class AssignToTeamComponent implements OnInit{

  teams: Team[] = [];

  constructor(public dialogRef: MatDialogRef<AssignToTeamComponent>,public teamService:TeamService) {}

ngOnInit(): void {
    this.loadTeams();
}

loadTeams(): void {
  this.teamService.list().subscribe(
    data => {
      this.teams = data;
    },
    err => console.log(err)
  )
}

assign(teamName:string) {
  this.dialogRef.close(teamName)
}


}
