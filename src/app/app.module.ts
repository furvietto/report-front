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
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { CreateTeamComponent } from './admin/team/create-team/create-team.component';
import { ListTeamComponent } from './admin/team/list-team/list-team.component';
import { AssignToTeamComponent } from './admin/dialog/assign-to-team/assign-to-team.component';
import {MatListModule} from '@angular/material/list';
import { ViewUserComponent } from './admin/dialog/view-user/view-user.component';
import { CreateReportComponent } from './standard/report/create-report/create-report.component';
import { ListReportStandardComponent } from './standard/report/list-report-standard/list-report-standard.component';
import { ModifyReportComponent } from './standard/dialog/modify-report/modify-report.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListReportTeamLeaderComponent } from './teamleader/report/list-report-team-leader/list-report-team-leader.component';
import { ListTeamMateComponent } from './teamleader/teamMate/list-team-mate/list-team-mate.component';
import { AssignToClientComponent } from './admin/dialog/assign-to-client/assign-to-client.component';
import { ListClientStandardComponent } from './standard/client/list-client-standard/list-client-standard.component';
import { AssignToClientStandardComponent } from './standard/dialog/assign-to-client-standard/assign-to-client-standard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListComponent,
    CreateComponent,
    CreateUserComponent,
    ListUserComponent,
    CreateTeamComponent,
    ListTeamComponent,
    AssignToTeamComponent,
    ViewUserComponent,
    CreateReportComponent,
    ListReportStandardComponent,
    ModifyReportComponent,
    ListReportTeamLeaderComponent,
    ListTeamMateComponent,
    AssignToClientComponent,
    ListClientStandardComponent,
    AssignToClientStandardComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatListModule,
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
