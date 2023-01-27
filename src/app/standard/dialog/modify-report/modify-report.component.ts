import { Report } from './../../../models/report';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AssignToClientStandardComponent } from '../assign-to-client-standard/assign-to-client-standard.component';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-modify-report',
  templateUrl: './modify-report.component.html',
  styleUrls: ['./modify-report.component.css']
})
export class ModifyReportComponent implements OnInit{

  constructor (@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ModifyReportComponent>,
  public dialog:MatDialog,
  ){}

  client!:string;

  report!:Report;

  title?:string;

  body?:string;

  ngOnInit(): void {
    this.dialogRef.updateSize('60%', '60%');
    this.report = this.data;
    this.title = this.report.title;
    this.body = this.report.bodyHtml;
    this.client = this.report.clientName
  }

  onSubmit() {
    let report:Report = {
      id:this.report.id,
      title: this.title,
      bodyHtml: this.body,
      clientName: this.client
    }
    this.dialogRef.close(report);
  }

  onAssign() {
    let dialogRef = this.dialog.open(AssignToClientStandardComponent);
      dialogRef.afterClosed().subscribe(
        result => {
          this.client = result;
        }
      )
  }
}
