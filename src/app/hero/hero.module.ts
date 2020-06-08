import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTestComponent } from './HeroTest/heroTest.component';

import { HeroMenuComponent } from './hero-menu/hero-menu.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroRoutingModule } from './hero-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HeroRoutingModule
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