import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTestComponent } from './heroTest/heroTest.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroMenuComponent } from './hero-menu/hero-menu.component';

const routes: Routes = [
  { path: 'heroExp', component: HeroTestComponent, data: { animation: 'heroPage' } },  
  { path: 'heroes',  component: HeroesComponent, data: { animation: 'heroesPage' } },
  { path: 'detail/:id', component: HeroDetailComponent, data: { animation: 'detailPage' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule {}