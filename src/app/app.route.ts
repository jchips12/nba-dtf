import { Routes } from '@angular/router';

import { MyPickComponent } from './my-pick/my-pick.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    { path: '', component: MyPickComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: PageNotFoundComponent}
];
