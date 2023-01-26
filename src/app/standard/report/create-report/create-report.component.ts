import { ReportService } from './../../../services/report.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { LoginService } from 'src/app/services/login.service';
import { ShowMessageComponent } from 'src/app/admin/dialog/show-message/show-message.component';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent {

  form!:FormGroup;

  constructor(
    private loginService:LoginService,
    private fb:FormBuilder,
    public dialog:MatDialog,
    private router: Router,
    private reportService:ReportService
    ) {
      this.form = this.fb.group({
        title: this.fb.control('', [Validators.required]),
        body: this.fb.control('', [Validators.required])
      })
    }

  onSubmit() {
    if (this.form.valid) {
      let report:Report = {
        employeeId: this.loginService.getAccountId(),
        title: this.form.get("title")?.value,
        bodyHtml: this.form.get("body")?.value,
        status: "SENT",
        creationDate: new Date().toISOString().substring(0,10)
      }
      this.reportService.create(report).subscribe(
        result => {
          let dialogRef = this.dialog.open(ShowMessageComponent,{
            data: result.message
          });
          dialogRef.afterClosed().subscribe(
            result => {
              this.router.navigateByUrl("listaReportStandard")
            }
          )
        }
      )
    }

  }

  onSaved() {
    if (this.form.valid) {
      let report:Report = {
        employeeId: this.loginService.getAccountId(),
        title: this.form.get("title")?.value,
        bodyHtml: this.form.get("body")?.value,
        status: "SAVED",
        creationDate: new Date().toISOString().substring(0,10)
      }
      this.reportService.create(report).subscribe(
        result => {
          let dialogRef = this.dialog.open(ShowMessageComponent,{
            data: result.message
          });
          dialogRef.afterClosed().subscribe(
            result => {
              this.router.navigateByUrl("listaReportStandard")
            }
          )
        }
      )
    }
  }

}
