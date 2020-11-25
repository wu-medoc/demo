import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
// google maps Agm
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    NgxUsefulSwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0XQBqNsHt-g1VJEqVCrW7uG0tpMMS9sc',
      language: 'zh-TW'
    }),
  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }
