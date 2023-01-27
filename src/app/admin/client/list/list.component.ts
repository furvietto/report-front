import { JobService } from './../../../services/job.service';
import { BindUserClient } from './../../../models/bind-user-client';
import { AssignToClientComponent } from './../../dialog/assign-to-client/assign-to-client.component';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client} from "../../../models/client";
import {MatDialog} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { ShowMessageComponent } from '../../dialog/show-message/show-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

constructor(private clientService: ClientService,
   public dialog:MatDialog,
   private loginService:LoginService,
   private router: Router,
   private jobService:JobService) {}

ngOnInit(): void {
  if (this.loginService.stringGetRole() != "ADMIN") {
    this.dialog.open(ShowMessageComponent,{
      data: "NON CE PROVà, CHIAMO I CARABINIERI!!!!!!"
    });
    this.router.navigateByUrl("/")
  }
    this.loadClients();
}

clients: Client[] = [];

loadClients(): void {
  this.clientService.list().subscribe(
    data => {
      this.clients = data;
    },
    err => console.log(err)
  )
}

assegnaADipendente(clientId:any) {
  let dialogRef = this.dialog.open(AssignToClientComponent,{
  });
  dialogRef.afterClosed().subscribe(
    result => {
      let bindUserClient:BindUserClient = {
        accountId: result,
        clientId:clientId,
        creationDate:new Date().toISOString().substring(0,10),
      }
      this.jobService.assign(bindUserClient).subscribe(
        message => {
          this.dialog.open(ShowMessageComponent,{
            data: message.message
          });
        },
      err => console.log(err)
      )
    }
  )
}

}
