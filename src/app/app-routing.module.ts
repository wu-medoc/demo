import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoamingComponent } from './roaming/roaming.component';
import { NotifyComponent } from './notify/notify.component';


const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'Roaming' , component: RoamingComponent },
  { path: 'Notify' , component: NotifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
