import { Team } from 'src/app/models/team';
import { TeamService } from './../../../services/team.service';
import { LoginService } from './../../../services/login.service';
import { ShowMessageComponent } from './../../dialog/show-message/show-message.component';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignToTeamComponent } from '../../dialog/assign-to-team/assign-to-team.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  teams:Team[] = [];

  teamName!:string;

  form!:FormGroup;

  constructor(private userService: UserService,
    private loginService:LoginService,
    private fb:FormBuilder,
    public dialog:MatDialog,
    private router: Router,
    private teamService:TeamService
    ) {
      this.form = this.fb.group({
        username: this.fb.control('', [Validators.required,Validators.minLength(4)]),
        email: this.fb.control('', [Validators.required,Validators.email]),
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
        team: this.fb.control({value:'',disabled:true}, [Validators.required]),
      })
    }

    assignToTeam() {
      if (this.teams.length == 0) {
        this.dialog.open(ShowMessageComponent,{
          data: "CREA PRIMA UN TEAM"
        });
      }
      else{
        let dialogRef = this.dialog.open(AssignToTeamComponent);
      dialogRef.afterClosed().subscribe(
        result => {
          this.teamName = result;
        }
      )
      }
    }

  onSubmit(): void {
    if (this.form.valid) {
      let user:User = {
        username: this.form.get("username")?.value,
        email: this.form.get("email")?.value,
        firstName: this.form.get("firstName")?.value,
        lastName: this.form.get("lastName")?.value,
        password: this.form.get("password")?.value,
        team: this.form.get("team")?.value,
      }
      this.userService.create(user).subscribe(
        result => {
          let dialogRef = this.dialog.open(ShowMessageComponent,{
            data: result.message
          });
          dialogRef.afterClosed().subscribe(
            result => {
              this.router.navigateByUrl("listaUserAdmin")
            }
          )
        },
        err => {
          if (err.status == 409) {
            this.dialog.open(ShowMessageComponent,{
              data: "Utente gia esistente"
            });
          }
          else{
            this.dialog.open(ShowMessageComponent,{
              data: "errore insolito durante la creazione"
            });
          }
        }
      );
     }
  }

  ngOnInit(): void {
    if (this.loginService.stringGetRole() != "ADMIN") {
      let dialogRef = this.dialog.open(ShowMessageComponent,{
        data: "NON CE PROVà CHIAMO I CARABINIERI!!!!!!"
      });
      this.router.navigateByUrl("/")
    }
    this.teamService.list().subscribe(
    data => {
      this.teams = data;
    }
    )
  }
}
