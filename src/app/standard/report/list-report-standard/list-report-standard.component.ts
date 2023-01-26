import { LoginService } from 'src/app/services/login.service';
import { ReportService } from './../../../services/report.service';
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
    public dialog:MatDialog,
    private router: Router,
    private loginService:LoginService) {
  }

  ngOnInit(): void {
    this.loadReports();
}



  reports: Report[] = [];

  loadReports(): void {
    let accountId = this.loginService.getAccountId();
    this.reportService.list(accountId).subscribe(
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
            this.loadReports();
          }
        )
      }
    )
  }

}
