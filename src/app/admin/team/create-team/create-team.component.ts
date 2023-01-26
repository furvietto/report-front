import { LoginService } from './../../../services/login.service';
import { TeamService } from './../../../services/team.service';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ShowMessageComponent } from '../../dialog/show-message/show-message.component';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit{

  ngOnInit(): void {
    if (this.loginService.stringGetRole() != "ADMIN") {
      let dialogRef = this.dialog.open(ShowMessageComponent,{
        data: "NON CE PROVà, CHIAMO I CARABINIERI!!!!!!"
      });
      this.router.navigateByUrl("/")
    }
  }

  form!:FormGroup;

  constructor(private fb:FormBuilder,
    private loginService:LoginService,
    public dialog:MatDialog,
    public teamService:TeamService,
    private router: Router) {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.form.valid) {
     let team:Team = {
       name: this.form.get("name")?.value,
       creationDate: new Date().toISOString().substring(0,10),
     }
     this.teamService.create(team).subscribe(
       data => {
         let dialogRef = this.dialog.open(ShowMessageComponent,{
           data: "Creazione team avvenuta con successo"
         });
         dialogRef.afterClosed().subscribe(
           result => {
             this.router.navigateByUrl("listaTeamAdmin")
           }
         )
       },
       err => {
         if (err.status == 409) {
           let dialogRef = this.dialog.open(ShowMessageComponent,{
             data:"Errore Team gia esistente"
           });
         }
       }
     );
    }
   }

}
