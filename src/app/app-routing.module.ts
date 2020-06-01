import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoamingComponent } from './roaming/roaming.component';
import { NotifyComponent } from './notify/notify.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroTestComponent } from './heroTest/heroTest.component';
import { HeroesComponent } from './heroes/heroes.component';



const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'HeroTest' , component: HeroTestComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
