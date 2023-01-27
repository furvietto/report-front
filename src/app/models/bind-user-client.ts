export class BindUserClient {
  accountId?: any;
  clientId?: string;
  creationDate?: string;

  constructor (accountId: any, clientId:string, creationDate:string) {
    this.accountId = accountId;
    this.clientId = clientId;
    this.creationDate = creationDate;

  }
}
