import { OnInit, Component, HostBinding } from '@angular/core';
import Swiper from "swiper";
import { swiperImg } from './swiperImg';
import { boxtabsData } from './boxtabsData';
import { SwiperOptions } from 'swiper';

import { slideInAnimation } from './../animations';

declare var $: any;

@Component({
  selector: 'app-swiperDemo',
  templateUrl: './swiperDemo.component.html',
  styleUrls: ['./swiperDemo.component.css'],  
  animations: [ slideInAnimation ]
})

export class swiperDemoComponent implements OnInit {

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

  /** 
   * 內容引入
   * swiperImg 廣告圖
   * boxtabsData 列表內容及連結
   */
  slides = swiperImg;
  slidestab = boxtabsData;

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
