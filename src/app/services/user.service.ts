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

  constructor(private httClient:HttpClient) { }

  public create(user: User): Observable<any> {
    return this.httClient.post<any>(this.userURL + "/create",user, this.httpOptions)
  }

  public list(): Observable<any[]> {
    return this.httClient.get<any[]>(this.userURL + "/listUsers", this.httpOptions)
  }
}
