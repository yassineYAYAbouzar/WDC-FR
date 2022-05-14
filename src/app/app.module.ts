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
import { ResponsableListComponent } from './component/responsable/responsable-list/responsable-list.component';
import { JwtInterceptor } from './service/auth/jwt.interceptor';
import { AppBarComponent } from './component/app-bar/app-bar.component';
import { ParticipantListComponent } from './component/participant/participant-list/participant-list.component';
import { ActivityListComponent } from './component/activity/activity-list/activity-list.component';
import { AddResponsableComponent } from './component/responsable/add-responsable/add-responsable.component';
import { EditResponsableComponent } from './component/responsable/edit-responsable/edit-responsable.component';
import { EditParticipantComponent } from './component/participant/edit-participant/edit-participant.component';
import { EditActivityComponent } from './component/activity/edit-activity/edit-activity.component';
import { AddActivityComponent } from './component/activity/add-activity/add-activity.component';
import { AddExrciceComponent } from './component/exercice/add-exrcice/add-exrcice.component';
import { UpdateExrciceComponent } from './component/exercice/update-exrcice/update-exrcice.component';
import { ListExrciceComponent } from './component/exercice/list-exrcice/list-exrcice.component';

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
    AddResponsableComponent,
    EditResponsableComponent,
    EditParticipantComponent,
    EditActivityComponent,
    AddActivityComponent,
    AddExrciceComponent,
    UpdateExrciceComponent,
    ListExrciceComponent,
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
