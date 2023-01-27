import { LoginService } from './../../../services/login.service';
import { ClientService } from './../../../services/client.service';
import { Client } from './../../../models/client';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-to-client-standard',
  templateUrl: './assign-to-client-standard.component.html',
  styleUrls: ['./assign-to-client-standard.component.css']
})
export class AssignToClientStandardComponent implements OnInit{

  constructor(private clientService:ClientService,
    public dialogRef: MatDialogRef<AssignToClientStandardComponent>,
    private loginService:LoginService) {}

  clients!:Client[]

loadClient(): void {
  let accountId = this.loginService.getAccountId();
  this.clientService.listClientStandard(accountId).subscribe(
    data => {
      this.clients = data;
    },
    err => console.log(err)
  )
}

assign(clientName:any) {
  console.log(clientName);

  this.dialogRef.close(clientName)
}

ngOnInit(): void {
  this.loadClient();
}

}
