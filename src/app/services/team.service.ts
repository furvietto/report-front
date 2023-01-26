import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL= "http://localhost:8080/report/v1/teams";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private httpClient:HttpClient) { }

  public create(team: Team): Observable<any> {
    return this.httpClient.post<any>(this.teamURL + "", team ,this.httpOptions)
  }

  public list(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.teamURL + "/getAllTeams", this.httpOptions)
  }

}
