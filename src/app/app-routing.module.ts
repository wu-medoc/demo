import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';
import { HeroTestComponent } from './hero/heroTest/heroTest.component';
import { HeroMenuComponent } from './hero/hero-menu/hero-menu.component';
import { formUIComponent } from './formUI/formUI.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { MessagesComponent }    from './hero/messages/messages.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { AnimLayerComponent } from './anim-layer/anim-layer.component';


const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
  { path: 'animLayer', component: AnimLayerComponent, data: {animation: 'animLayerPage'} },
  { path: 'formUI', component: formUIComponent, data: {animation: 'formUIPage'} },
  { path: 'icon', component: FontawesomeIconComponent, data: {animation: 'fontawesomeIconPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
