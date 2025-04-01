import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureOAuth();
  }

  private configureOAuth() {
    // Configura i dettagli per il flusso di autenticazione
    this.oauthService.configure({
      issuer: 'https://your-oauth-provider.com', // Inserisci l'URL del tuo provider OAuth
      redirectUri: window.location.origin + '/index.html', // URL per il redirect dopo l'autenticazione
      clientId: 'your-client-id', // ID client fornito dal provider OAuth
      scope: 'openid profile email', // Scopi richiesti
      responseType: 'code', // Tipo di risposta, generalmente 'code' per il flusso di autorizzazione
      showDebugInformation: true // Abilita la visualizzazione dei log per il debug
    });

    // Carica il documento di scoperta per il provider
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  // Avvia il flusso di login
  login() {
    this.oauthService.initLoginFlow();
  }

  // Esegui il logout
  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/']); // Naviga verso la home dopo il logout
  }

  // Restituisce il token di accesso
  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  // Restituisce true se l'utente è autenticato
  isAuthenticated() {
    return this.oauthService.hasValidAccessToken();
  }

  // Restituisce il profilo dell'utente autenticato
  loadUserProfile() {
    return this.oauthService.loadUserProfile();
  }
}
