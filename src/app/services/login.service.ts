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
}
