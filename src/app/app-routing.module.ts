import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';
import { HeroTestComponent } from './hero/heroTest/heroTest.component';
import { HeroMenuComponent } from './hero/hero-menu/hero-menu.component';
import { RoamingComponent } from './roaming/roaming.component';
import { NotifyComponent } from './notify/notify.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { MessagesComponent }    from './hero/messages/messages.component';
import { HeroesComponent } from './hero/heroes/heroes.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
  //{ path: 'hero', component: HeroMenuComponent, data: {animation: 'HeroMenuPage'} },
  { path: 'roaming', component: RoamingComponent, data: {animation: 'roamingPage'} },
  { path: 'notify', component: NotifyComponent, data: {animation: 'notifyPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
