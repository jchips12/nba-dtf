import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MyPickComponent } from './my-pick/my-pick.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DailyLeadersComponent } from './daily-leaders/daily-leaders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES: Routes = [
    { path: '', component: MyPickComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'daily-leaders', component: DailyLeadersComponent },
    { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTE: ModuleWithProviders = RouterModule.forRoot(ROUTES);
