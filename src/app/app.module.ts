import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';
import { HeroTestComponent } from './heroTest/heroTest.component';
import { RoamingComponent } from './roaming/roaming.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    swiperDemoComponent,
    HeroTestComponent,
    RoamingComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    NgxUsefulSwiperModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
      { path: 'heroTest', component: HeroTestComponent, data: {animation: 'heroTestPage'} },
      { path: 'roaming', component: RoamingComponent, data: {animation: 'roamingPage'} },
      { path: 'notify', component: NotifyComponent, data: {animation: 'notifyPage'} }
    ]),
    NgCircleProgressModule.forRoot({
      radius: 20,
      space: -6,
      clockwise: true,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: '18',
      outerStrokeWidth: 6,
      innerStrokeWidth: 6,
      outerStrokeGradientStopColor: '#53a9ff',
      outerStrokeColor: '#FD5F00',
      innerStrokeColor: '#e7e8ea',
      titleColor: '#FD5F00',
      animation: true,
      animationDuration: 300,
      renderOnClick: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
