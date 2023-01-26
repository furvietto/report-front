import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  users!: User[];

  checkIsLeader!:boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[],public dialogRef: MatDialogRef<ViewUserComponent>) {
  }

  ngOnInit(): void {
    this.data.forEach( data => {
      if (data.leader == true) {
        this.checkIsLeader = true;
      }
    })
    this.users = this.data;
  }

  assegnaTeamLeader(accountId:any) {
    this.dialogRef.close(accountId)
  }
}
