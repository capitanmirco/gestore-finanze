import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { SharedModule } from './shared/shared.module';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    HomeComponent,
    SharedModule,
    HighchartsChartModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
