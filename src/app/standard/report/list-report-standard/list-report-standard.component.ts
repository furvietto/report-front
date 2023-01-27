import { UserService } from './../../../services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { ReportService } from '../../../services/report.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Report } from 'src/app/models/report';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModifyReportComponent } from '../../dialog/modify-report/modify-report.component';
import { ShowMessageComponent } from 'src/app/admin/dialog/show-message/show-message.component';

@Component({
  selector: 'app-list-report-standard',
  templateUrl: './list-report-standard.component.html',
  styleUrls: ['./list-report-standard.component.css']
})
export class ListReportStandardComponent implements OnInit{

  constructor(private reportService:ReportService,
    private userService:UserService,
    public dialog:MatDialog,
    private router: Router,
    private loginService:LoginService) {
  }

  ngOnInit(): void {
    this.role = this.loginService.stringGetRole()
    if (this.role == "STANDARD" || this.role == "TEAM-LEADER") {
      this.loadReportsStandard();
    }
    if (this.role == "ADMIN") {
      this.loadReportsAdmin();
    }
}

  role!:string;

  reports: Report[] = [];


  loadReportsStandard(): void {
    let accountId = this.loginService.getAccountId();
    this.reportService.listStandard(accountId).subscribe(
      data => {
        console.log(data);

        this.reports = data;
      },
      err => console.log(err)
    )
  }

  loadReportsAdmin(): void {
    this.userService.listAdmin().subscribe(
      data => {
        this.reports = data;
      },
      err => console.log(err)
    )
  }

  onModify(report:Report) {
    let dialogRef = this.dialog.open(ModifyReportComponent,{
      data: report
    });
    dialogRef.afterClosed().subscribe(
      result => {
        this.reportService.modifyReport(result).subscribe(
          message => {
            this.dialog.open(ShowMessageComponent,{
              data: message.message
            });
            this.loadReportsStandard();
          }
        )
      }
    )
  }

}
