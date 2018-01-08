import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AuthenticationService} from "./authentication.service";
import {ValuesService} from "./values.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [AuthenticationService, ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
