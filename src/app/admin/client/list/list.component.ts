import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client} from "../../../models/client";
import {MatDialog} from '@angular/material/dialog';
import { AssignComponent } from '../../dialog/assign/assign.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

constructor(private clientService: ClientService, public dialog:MatDialog) {}

ngOnInit(): void {
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
  let dialogRef = this.dialog.open(AssignComponent)

}

}
