import { Report } from './../../../models/report';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { ModifyReportComponent } from 'src/app/standard/dialog/modify-report/modify-report.component';
import { ShowMessageComponent } from 'src/app/admin/dialog/show-message/show-message.component';

@Component({
  selector: 'app-list-report-team-leader',
  templateUrl: './list-report-team-leader.component.html',
  styleUrls: ['./list-report-team-leader.component.css']
})
export class ListReportTeamLeaderComponent implements OnInit{

  constructor(
    private userService:UserService,
    public dialog:MatDialog,
    private loginService:LoginService) {}

    ngOnInit(): void {
      this.loadReportsTeamLeader();
  }

    role!:string;

    reports: Report[] = [];

    loadReportsTeamLeader(): void {
      let accountId = this.loginService.getAccountId();
      this.userService.listReportsTeamLeader(accountId).subscribe(
        data => {
          this.reports = data;
        },
        err => console.log(err)
      )
    }

    onModify(report:Report) {
        this.dialog.open(ModifyReportComponent,{
        data: report
      });
    }

}
