import { ListClientStandardComponent } from './standard/client/list-client-standard/list-client-standard.component';
import { ListReportTeamLeaderComponent } from './teamleader/report/list-report-team-leader/list-report-team-leader.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './admin/client/list/list.component';
import { CreateComponent } from './admin/client/create/create.component';
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { CreateTeamComponent } from './admin/team/create-team/create-team.component';
import { ListTeamComponent } from './admin/team/list-team/list-team.component';
import { CreateReportComponent } from './standard/report/create-report/create-report.component';
import { ListReportStandardComponent } from './standard/report/list-report-standard/list-report-standard.component';
import { ListTeamMateComponent } from './teamleader/teamMate/list-team-mate/list-team-mate.component';




const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listaClientAdmin', component:ListComponent},
  {path: 'listaUserAdmin', component:ListUserComponent},
  {path: 'listaTeamAdmin', component:ListTeamComponent},
  {path: 'createClientAdmin', component:CreateComponent},
  {path: 'createUserAdmin', component:CreateUserComponent},
  {path: 'createTeamAdmin', component:CreateTeamComponent},
  {path: 'createReportStandard', component:CreateReportComponent},
  {path: 'listaReportStandard', component:ListReportStandardComponent},
  {path: 'listaReportTeamLeader', component:ListReportTeamLeaderComponent},
  {path: 'listaTeamMateTeamLeader', component:ListTeamMateComponent},
  {path: 'listaClientStandard', component:ListClientStandardComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
