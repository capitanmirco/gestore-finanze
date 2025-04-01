import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthModule } from 'angular-oauth2-oidc'; // Importa il modulo OAuth

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot() // Configura il modulo OAuth
  ]
})
export class AuthModule { }
