import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTestComponent } from './HeroTest/HeroTest.component';
import { HeroMenuComponent } from './hero-menu/hero-menu.component';


const heroRoutes: Routes = [
  {
    path: '',
    component: HeroMenuComponent,
    children: [
      {
        path: '',
        children: [
          { path: '/heroes', component: HeroesComponent },
          { path: '/herotest', component: HeroTestComponent },
          { path: '', component: HeroTestComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule {}