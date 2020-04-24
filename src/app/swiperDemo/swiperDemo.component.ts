import { OnInit, Component, HostBinding } from '@angular/core';
import Swiper from "swiper";
import { swiperImg } from './swiperImg';
import { SwiperOptions } from 'swiper';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../animations';

declare var $: any;

@Component({
  selector: 'app-swiperDemo',
  templateUrl: './swiperDemo.component.html',
  styleUrls: ['./swiperDemo.component.css'],  
  animations: [ slideInAnimation ]
})

export class swiperDemoComponent implements OnInit {
  /** 動畫換頁 */
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  
  prepareRoute1(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }  

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

  /** 大看板內容 */
  slides = swiperImg;

  /** 大看板 */
  public boxKV : SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true
  };
  constructor() {}

  ngAfterViewInit() {   
  }

  ngOnInit() {
  }

}
