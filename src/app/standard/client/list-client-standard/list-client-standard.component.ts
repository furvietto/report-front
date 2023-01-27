import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-list-client-standard',
  templateUrl: './list-client-standard.component.html',
  styleUrls: ['./list-client-standard.component.css']
})
export class ListClientStandardComponent implements OnInit{

  constructor(private clientService:ClientService,
    public dialog:MatDialog,
    private loginService:LoginService) {
  }

  ngOnInit(): void {
    this.loadClient();
}

clients!:Client[];

loadClient(): void {
  let accountId = this.loginService.getAccountId();
  this.clientService.listClientStandard(accountId).subscribe(
    data => {
      this.clients = data;
    },
    err => console.log(err)
  )
}

}
