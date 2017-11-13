import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(routes);