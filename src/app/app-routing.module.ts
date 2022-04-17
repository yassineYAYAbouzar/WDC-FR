import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeComponent } from './component/quize/quize.component';
import { AppComponent } from './component/main/app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [

  { 
    component: QuizeComponent,
    path: ':quizId',
  },
  { 
    component: WelcomeComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
