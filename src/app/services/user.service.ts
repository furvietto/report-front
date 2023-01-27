import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL= "http://localhost:8080/report/v1/user";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private httpClient:HttpClient) { }

  public create(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL + "/create",user, this.httpOptions)
  }

  public list(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.userURL + "/listUsers", this.httpOptions)
  }

  public listUserByTeamId(teamId:number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userURL + `/getAllUser/${teamId}`,this.httpOptions)
  }

  public assignTeamLeader(accountId:string):Observable<any> {
    return this.httpClient.get<any>(this.userURL + `/assignTeamLeader/${accountId}`,this.httpOptions)
  }

  public listAdmin():Observable<any> {
    return this.httpClient.get<any[]>(this.userURL + `/listReportAdmin`,this.httpOptions)
  }

  public listReportsTeamLeader(accountId:string):Observable<any> {
    return this.httpClient.get<any[]>(this.userURL + `/listReportTeamLeader/${accountId}`,this.httpOptions)
  }

  public listUsersTeamLeader(accountId:string):Observable<any> {
    return this.httpClient.get<any[]>(this.userURL + `/listUsersTeamLeader/${accountId}`,this.httpOptions)
  }


}
