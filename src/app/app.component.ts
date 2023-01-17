import { MessageService } from './services/message.service';
import { NullValidationHandler,OAuthService,AuthConfig } from 'angular-oauth2-oidc';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'report-front';

  username!: string;
  isLogged!: boolean;
  isAdmin!: boolean;
  isTeamLeader!:boolean;

  constructor(private oAuthService: OAuthService, private messageService:MessageService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:8180/realms/idReports',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'idreports-frontend',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email offline_access',

    showDebugInformation: true,
  };

  configure(): void {
    this.oAuthService.configure(this.authConfig);
    this.oAuthService.tokenValidationHandler = new NullValidationHandler();
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocument().then(() => this.oAuthService.tryLogin())
    .then(() => {
      if (this.oAuthService.getIdentityClaims()) {
        this.isLogged = this.getIsLogged();
        this.isAdmin = this.getIsAdmin();
        this.isTeamLeader = this.getIsTeamleader();
        this.username = this.getUsername();
        this.messageService.sendMessage(this.getUsername());
      }
    })
    ;
  }

  public getIsLogged(): boolean {
    return (this.oAuthService.hasValidIdToken() && this.oAuthService.hasValidAccessToken());
  }

  public getUsername(): string {
    return this.oAuthService.getIdentityClaims()['preferred_username'];
  }

  public getIsAdmin(): boolean {
    const token = this.oAuthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    //console.log(payloadDecoded);
    return payloadDecoded.realm_access.roles.indexOf('REALM-ADMIN') !== -1;
  }

  public getIsTeamleader(): boolean {
    const token = this.oAuthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    //console.log(payloadDecoded);
    return payloadDecoded.realm_access.roles.indexOf('REALM-TEAMLEADER') !== -1;
  }


}
