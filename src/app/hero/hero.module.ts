import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTestComponent } from './HeroTest/HeroTest.component';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroMenuComponent } from './hero-menu/hero-menu.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    imports: [
      CommonModule,
      HeroRoutingModule,
    ],
    declarations: [
      HeroTestComponent,
      HeroDetailComponent,
      HeroesComponent,
      HeroMenuComponent,
      MessagesComponent
    ]
  })
  export class HeroModule {}