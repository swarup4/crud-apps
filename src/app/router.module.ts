// import { Routes, RouterModule } from '@angular/router';
import {UIRouterModule} from '@uirouter/angular';

import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

// export const routes: Routes = [
//     { path: 'order', component: OrderComponent },
//     {
//         path: 'login',
//         component: LoginComponent,
//         children: [
//             { path: 'signup', component: SignupComponent }
//         ]
//     }
// ];

// export const routing = RouterModule.forRoot(routes);



const routes = [
    { name: 'home', url: '/',  component: HomepageComponent },
    { name: 'order', url: '/order',  component: OrderComponent },
    { name: 'login', url: '/login',  component: LoginComponent },
    { name: 'signup', url: '/signup',  component: SignupComponent }
];

export const routing = UIRouterModule.forRoot({ states: routes, useHash: true });
