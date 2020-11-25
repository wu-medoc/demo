import { NgModule } from '@angular/core';
// PreloadAllModules預載
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


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
import { CropperComponent } from './cropper/cropper.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'social', component: SocialComponent, data: {animation: 'socialPage'} },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)},
  { path: 'sort', component: SortpageComponent, data: {animation: 'sortPage'} },
  { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
  { path: 'animLayer', component: AnimLayerComponent, data: {animation: 'animLayerPage'} },
  { path: 'formUI', component: formUIComponent, data: {animation: 'formUIPage'} },
  { path: 'icon', component: FontawesomeIconComponent, data: {animation: 'iconPage'} },
  { path: 'heroExp', component: HeroTestComponent, data: {animation: 'heroPage'} },
  { path: 'cropper', component: CropperComponent, data: {animation: 'cropperPage'} },
  {
    path: 'lazy', children: [
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      },
      { path: '', pathMatch: 'full', redirectTo: 'customers' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'cropper' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
