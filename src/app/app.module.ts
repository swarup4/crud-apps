import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { routing } from './router.module';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// const routes = [
//   { path: 'order', component: OrderComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
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
