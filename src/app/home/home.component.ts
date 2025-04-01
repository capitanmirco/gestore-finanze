import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Importa il servizio di autenticazione

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Carica il profilo dell'utente dopo il login
    this.authService.loadUserProfile().then(profile => {
      this.user = profile;
    });
  }

  logout() {
    // Esegui il logout
    this.authService.logout();
  }
}
