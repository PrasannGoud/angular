import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

const routes: Routes = [
  { path: '', component: ProfileFormComponent },
  {path:'profile',component:ProfileFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
