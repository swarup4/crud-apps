import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'menu', component: MenuComponent },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            { path: 'signup', component: SignupComponent }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);
