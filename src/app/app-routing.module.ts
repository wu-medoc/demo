import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent }  from './hero/hero-detail/hero-detail.component';
import { HeroTestComponent } from './hero/heroTest/heroTest.component';
import { HeroMenuComponent } from './hero/hero-menu/hero-menu.component';
import { HeroesComponent } from './hero/heroes/heroes.component';



const appRoutes: Routes = [  
  { path: '', component: HeroMenuComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'herotest', component: HeroTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
