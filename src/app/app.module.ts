import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';
import { HeroTestComponent } from './heroTest/heroTest.component';
import { RoamingComponent } from './roaming/roaming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    swiperDemoComponent,
    HeroTestComponent,
    RoamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
      { path: 'heroTest', component: HeroTestComponent, data: {animation: 'heroTestPage'} },
      { path: 'roaming', component: RoamingComponent, data: {animation: 'roamingPage'} },
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
