import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { swiperDemoComponent } from './swiperDemo/swiperDemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    swiperDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'swiperDemo', component: swiperDemoComponent, data: {animation: 'swiperDemoPage'} },
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
