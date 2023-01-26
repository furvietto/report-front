export class Report {
  id?: number;
  employeeId?: string;
  title?: string;
  bodyHtml?: string;
  status?:string;
  clientId?:number;
  creationDate?:any;
  lastUpdate?:any;

  constructor (id: number, employeeId:string, title:string, bodyHtml:string, status:string, clientId:number, creationDate:any, lastUpdate:any) {
    this.id = id;
    this.employeeId = employeeId;
    this.title = title;
    this.bodyHtml = bodyHtml;
    this.status = status;
    this.clientId = clientId;
    this.creationDate = creationDate;
    this.lastUpdate = lastUpdate;
  }
}
