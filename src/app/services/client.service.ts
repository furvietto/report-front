import { Client } from './../models/client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientURL= "http://localhost:8080/report/v1/client";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientURL + "/getAllClient", this.httpOptions)
  }

  public create(client: Client): Observable<any> {
    return this.httpClient.post<any>(this.clientURL + "", client ,this.httpOptions)
  }

  public listClientStandard(accountId:string): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientURL + `/getAllClient/${accountId}`, this.httpOptions)
  }
}
