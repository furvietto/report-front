import { LoginService } from './../../../services/login.service';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';
import {MatDialog} from '@angular/material/dialog';
import { ShowMessageComponent } from '../../dialog/show-message/show-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  ngOnInit(): void {
    if (this.loginService.stringGetRole() != "ADMIN") {
      let dialogRef = this.dialog.open(ShowMessageComponent,{
        data: "NON CE PROVà,CHIAMO I CARABINIERI!!!!!!"
      });
      this.router.navigateByUrl("/")
    }
  }

  form!:FormGroup;

  constructor(private fb:FormBuilder,
    private clientService:ClientService,
    public dialog:MatDialog,
    private router: Router,
    private loginService:LoginService) {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
    })
  }

  onSubmit() {
   if (this.form.valid) {
    let client:Client = {
      name: this.form.get("name")?.value,
      creationDate: new Date().toISOString().substring(0,10),
    }
    this.clientService.create(client).subscribe(
      data => {
        let dialogRef = this.dialog.open(ShowMessageComponent,{
          data: "Creazione cliente avvenuta con successo"
        });
        dialogRef.afterClosed().subscribe(
          result => {
            this.router.navigateByUrl("listaClientAdmin")
          }
        )
      },
      err => {
        if (err.status == 409) {
          let dialogRef = this.dialog.open(ShowMessageComponent,{
            data:"Errore cliente gia esistente"
          });
        }
      }
    );
   }
  }

}
