import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient:HttpClient) { }

  reportURL= "http://localhost:8080/report/v1/reports";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  public create(report: Report): Observable<any> {
    return this.httpClient.post<any>(this.reportURL + "", report ,this.httpOptions)
  }

  public list(accountId:string): Observable<Report[]> {
    return this.httpClient.get<Report[]>(this.reportURL + `/listReport/${accountId}`, this.httpOptions)
  }

  public modifyReport(report:Report): Observable<any> {
    return this.httpClient.put<any>(this.reportURL + `/modifyReport`,report,this.httpOptions)
  }
}
