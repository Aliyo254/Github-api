import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile-service/profile-service.service';
const routes: Routes = [

  {path: 'users', component: ProfileComponent},
  {path: 'repos', component: ProfileService}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
