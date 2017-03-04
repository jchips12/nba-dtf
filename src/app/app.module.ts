import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { APP_ROUTE } from './app.route';
import { AppComponent } from './app.component';
import { MyPickComponent } from './my-pick/my-pick.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DailyLeadersComponent } from './daily-leaders/daily-leaders.component';
import { DailyLeadersService } from './_service/daily-leaders.service';

@NgModule({
  declarations: [
    AppComponent,
    MyPickComponent,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    DailyLeadersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTE
  ],
  providers: [DailyLeadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
