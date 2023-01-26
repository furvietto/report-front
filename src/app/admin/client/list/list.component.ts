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
   private router: Router) {}

ngOnInit(): void {
  if (this.loginService.stringGetRole() != "ADMIN") {
    let dialogRef = this.dialog.open(ShowMessageComponent,{
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

}

}
