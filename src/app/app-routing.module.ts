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
import { MessagesComponent } from './hero/messages/messages.component';
import { SortpageComponent } from './sortpage/sortpage.component';
import { SocialComponent } from './social/social.component';
import { AnimLayerComponent } from './anim-layer/anim-layer.component';
import { MapsComponent } from './maps/maps.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'social', component: SocialComponent, data: {animation: 'socialPage'} },
  { path: 'maps', component: MapsComponent, data: {animation: 'mapsPage'} },
  { path: 'sort', component: SortpageComponent, data: {animation: 'sortPage'} },
  { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
  { path: 'animLayer', component: AnimLayerComponent, data: {animation: 'animLayerPage'} },
  { path: 'formUI', component: formUIComponent, data: {animation: 'formUIPage'} },
  { path: 'icon', component: FontawesomeIconComponent, data: {animation: 'iconPage'} },
  { path: 'heroExp', component: HeroTestComponent, data: {animation: 'heroPage'} },
  { path: '', pathMatch: 'full', redirectTo: 'sort' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
