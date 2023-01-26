import { Report } from './../../../models/report';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modify-report',
  templateUrl: './modify-report.component.html',
  styleUrls: ['./modify-report.component.css']
})
export class ModifyReportComponent implements OnInit{

  constructor (@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ModifyReportComponent>){}

  report!:Report;

  title?:string;

  body?:string;

  ngOnInit(): void {
    this.dialogRef.updateSize('60%', '60%');
    this.report = this.data;
    this.title = this.report.title;
    this.body = this.report.bodyHtml
  }

  onSubmit() {
    let report:Report = {
      id:this.report.id,
      title: this.title,
      bodyHtml: this.body
    }
    this.dialogRef.close(report);
  }
}
