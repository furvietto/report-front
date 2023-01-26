import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthService:OAuthService) { }


  public login(): void {
    this.oauthService.initImplicitFlowInternal();
  }

  public logout(): void {
    this.oauthService.logOut();
  }


  //metodo che ritorna un booleano per capire se l'utente è loggato oppure no
  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  //metodo per prendere l'username dell'utente
  public getUsername(): string {
    return this.oauthService.getIdentityClaims()['preferred_username'];
  }

   //metodo per prendere l'username dell'utente
   public getAccountId(): string {
    return this.oauthService.getIdentityClaims()['sub'];
  }

  //metodo che ritorna il ruolo in stringa
  public stringGetRole(): string {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    //console.log(payloadDecoded);
    return payloadDecoded.resource_access.idreports_backend.roles[0];
  }

  //metodo che ritorna un booleano a seconda del ruolo passato
  public getRole(role:string): boolean {
    const token = this.oauthService.getAccessToken();
    console.log(token);
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    //console.log(payloadDecoded);
    return payloadDecoded.realm_access.roles.indexOf(role) !== -1;
  }
}
