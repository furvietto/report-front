export class User {
  id?: number;
  accountId?:string
  username!: string;
  email!: string;
  firstName!:string;
  lastName!: string;
  password?: string;
  team?: string;
  leader?: boolean;

  constructor(id:number,accountId:string,username: string, email: string, firstName: string, lastName: string, password: string, team:string,leader:boolean) {
    this.id = id;
    this.accountId = accountId;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.team = team;
    this.leader = leader;
  }

}
