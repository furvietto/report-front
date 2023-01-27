import { Observable } from 'rxjs';
import { BindUserClient } from './../models/bind-user-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  clientURL= "http://localhost:8080/report/v1/job";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private httpClient:HttpClient) { }

  public assign(bindUserClient: BindUserClient): Observable<any> {
    return this.httpClient.post<any>(this.clientURL + "/assign", bindUserClient ,this.httpOptions)
  }
}
