import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard'; // Protezione per la home

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Pagina di login
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Pagina di home protetta
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Reindirizza alla home di default
  { path: '**', redirectTo: '/home' } // Gestisce percorsi non validi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
