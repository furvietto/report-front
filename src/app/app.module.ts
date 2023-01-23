import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import {OAuthModule} from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './admin/client/list/list.component';
import { CreateComponent } from './admin/client/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { AssignComponent } from './admin/dialog/assign/assign.component';
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { CreateTeamComponent } from './admin/team/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListComponent,
    CreateComponent,
    AssignComponent,
    CreateUserComponent,
    ListUserComponent,
    CreateTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/report/v1/client'],
          sendAccessToken: true
      }
  }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
