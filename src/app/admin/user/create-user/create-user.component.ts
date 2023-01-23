import { ShowMessageComponent } from './../../dialog/show-message/show-message.component';
import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  form!:FormGroup;

  constructor(private userService: UserService,
    private fb:FormBuilder,
    public dialog:MatDialog,
    private router: Router
    ) {
      this.form = this.fb.group({
        username: this.fb.control('', [Validators.required,Validators.minLength(4)]),
        email: this.fb.control('', [Validators.required,Validators.email]),
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      })
    }

  onSubmit(): void {
    if (this.form.valid) {
      let user:User = {
        username: this.form.get("username")?.value,
        email: this.form.get("email")?.value,
        firstName: this.form.get("firstName")?.value,
        lastName: this.form.get("lastName")?.value,
        password: this.form.get("password")?.value,
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
            let dialogRef = this.dialog.open(ShowMessageComponent,{
              data: "Utente gia esistente"
            });
          }
          else{
            let dialogRef = this.dialog.open(ShowMessageComponent,{
              data: "errore insolito durante la creazione"
            });
          }
        }
      );
     }
  }
}
