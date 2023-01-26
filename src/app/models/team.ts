export class Team {
  id?: any;
  name!: string;
  creationDate?: any;
  lastUpdate?: any;

  constructor (id: any, name:string, creationDate:any, lastUpdate:any) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.lastUpdate = lastUpdate;
  }
}
