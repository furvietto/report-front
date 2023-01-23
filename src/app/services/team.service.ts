import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  clientURL= "http://localhost:8080/report/v1/client";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private httpClient:HttpClient) { }

  public create(team: Team): Observable<any> {
    return this.httpClient.post<any>(this.clientURL + "", team ,this.httpOptions)
  }
}
