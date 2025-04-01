import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; // Importa il modulo AuthModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule // Aggiungi AuthModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
