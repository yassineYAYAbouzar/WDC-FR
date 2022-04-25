import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './component/main/app.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ResponsableListComponent } from './component/responsable-list/responsable-list.component';
import { AuthGuard } from './guards/auth.guard';
import { AlredyAuthGuard } from './guards/alredy-auth.guard';
import { ParticipantListComponent } from './component/participant-list/participant-list.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';

const routes: Routes = [

 
  { 
    component: WelcomeComponent,
    canActivate:[AuthGuard],
    path: 'admin', children:[
      {
        path : "",
        component : ResponsableListComponent
      },
      {
        path : "listParticipant",
        component : ParticipantListComponent
      },
      {
        path : "listActivity",
        component : ActivityListComponent
      }
    ]
  },
  { 
    component: LoginComponent,
    path: 'login',
    canActivate:[AlredyAuthGuard]
  },
  { 
    component: NotfoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
