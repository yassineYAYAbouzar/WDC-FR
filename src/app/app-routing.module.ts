import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './component/main/app.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ResponsableListComponent } from './component/responsable/responsable-list/responsable-list.component';
import { AuthGuard } from './guards/auth.guard';
import { AlredyAuthGuard } from './guards/alredy-auth.guard';
import { ParticipantListComponent } from './component/participant/participant-list/participant-list.component';
import { ActivityListComponent } from './component/activity/activity-list/activity-list.component';
import { AddResponsableComponent } from './component/responsable/add-responsable/add-responsable.component';
import { EditResponsableComponent } from './component/responsable/edit-responsable/edit-responsable.component';
import { EditParticipantComponent } from './component/participant/edit-participant/edit-participant.component';
import { EditActivityComponent } from './component/activity/edit-activity/edit-activity.component';
import { AddActivityComponent } from './component/activity/add-activity/add-activity.component';

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
        path : "addResponsable",
        component : AddResponsableComponent
      },
      {
        path : "addActivity",
        component : AddActivityComponent
      },
      {
        path : "editResponsable/:id",
        component : EditResponsableComponent
      },
      {
        path : "editParticipant/:id",
        component : EditParticipantComponent
      },
      {
        path : "editActivity/:id",
        component : EditActivityComponent
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
