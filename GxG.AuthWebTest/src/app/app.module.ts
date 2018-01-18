import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AuthenticationService} from "./authentication.service";
import {ValuesService} from "./values.service";
import { HomeComponent } from './home/home.component';
import {AppRoutes} from "./app.routes";
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthCallbackComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutes
  ],
  providers: [AuthenticationService, ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
