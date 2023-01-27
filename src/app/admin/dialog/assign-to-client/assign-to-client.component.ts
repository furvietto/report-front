import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-to-client',
  templateUrl: './assign-to-client.component.html',
  styleUrls: ['./assign-to-client.component.css']
})
export class AssignToClientComponent implements OnInit{

  constructor(private userService:UserService,public dialogRef: MatDialogRef<AssignToClientComponent>) {}

  users!:User[]

  ngOnInit(): void {
    this.loadUsers();
}

loadUsers(): void {
  this.userService.list().subscribe(
    data => {
      this.users = data;
    },
    err => console.log(err)
  )
}

assign(idUser:any) {
  this.dialogRef.close(idUser)
}


}
