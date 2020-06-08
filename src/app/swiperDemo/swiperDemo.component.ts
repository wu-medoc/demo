import { OnInit, Component, HostBinding } from '@angular/core';
import Swiper from "swiper";
import { swiperImg } from './swiperImg';
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

  /** 
   * 內容引入
   * swiperImg 廣告圖
   */
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
