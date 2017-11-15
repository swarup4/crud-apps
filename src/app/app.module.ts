import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';

import { routing } from './router.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
