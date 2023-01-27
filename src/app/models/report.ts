export class Report {
  id?: number;
  username?: string;
  teamName?: string;
  clientName?: any;
  employeeId?: string;
  title?: string;
  bodyHtml?: string;
  status?:string;
  clientId?:number;
  creationDate?:any;
  lastUpdate?:any;

  constructor (id: number,username: string,teamName: string ,clientName:string , employeeId:string, title:string, bodyHtml:string, status:string, clientId:number, creationDate:any, lastUpdate:any) {
    this.id = id;
    this.username = username;
    this.teamName = teamName;
    this.clientName = clientName;
    this.employeeId = employeeId;
    this.title = title;
    this.bodyHtml = bodyHtml;
    this.status = status;
    this.clientId = clientId;
    this.creationDate = creationDate;
    this.lastUpdate = lastUpdate;
  }
}
