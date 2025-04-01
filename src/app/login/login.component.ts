import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Importa il servizio di autenticazione

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login() {
    // Avvia il flusso di login quando l'utente clicca sul pulsante
    this.authService.login();
  }
}
