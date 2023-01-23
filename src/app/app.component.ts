import { LoginService } from './services/login.service';
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
  role!: string;
  isLogged!: boolean;
  isAdmin!: boolean;
  isTeamLeader!:boolean;

  constructor(private oAuthService: OAuthService,
     private messageService:MessageService,
     private loginService:LoginService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:8180/realms/idReports',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'idreports_frontend',

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

  //metodo che si attiva appena l'utente è loggato e configura le impostazioni e informazioni iniziali di accesso
  configure(): void {
    this.oAuthService.configure(this.authConfig);
    this.oAuthService.tokenValidationHandler = new NullValidationHandler();
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocument().then(() => this.oAuthService.tryLogin())
    .then(() => {
      if (this.oAuthService.getIdentityClaims()) {
        this.isLogged = this.loginService.getIsLogged();
        this.isAdmin = this.loginService.getRole('REALM-ADMIN');
        this.isTeamLeader = this.loginService.getRole('REALM-TEAMLEADER');
        this.username = this.loginService.getUsername();
        this.messageService.sendMessage(this.username);
        this.role = this.loginService.stringGetRole();
      }
    });
  }
}
