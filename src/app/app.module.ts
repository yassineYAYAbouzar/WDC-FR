import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/main/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AccountComponent } from './component/account/account.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ResponsableListComponent } from './component/responsable-list/responsable-list.component';
import { JwtInterceptor } from './service/auth/jwt.interceptor';
import { AppBarComponent } from './component/app-bar/app-bar.component';
import { ParticipantListComponent } from './component/participant-list/participant-list.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AccountComponent,
    WelcomeComponent,
    NotfoundComponent,
    ResponsableListComponent,
    AppBarComponent,
    ParticipantListComponent,
    ActivityListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : JwtInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
