import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interfaceData } from './interfaceData';
import { SwiperOptions } from 'swiper';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  /** 列表選單 */
  public boxTabs : SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  };

  slidestab = interfaceData;


  /** 頁面切換 */
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  public transX = '';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }  
}

