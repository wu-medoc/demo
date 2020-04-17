import { OnInit, Component } from '@angular/core';
import Swiper from "swiper";
import { swiperImg } from './swiperImg';

@Component({
  selector: 'app-swiperDemo',
  templateUrl: './swiperDemo.component.html',
  styleUrls: ['./swiperDemo.component.css']
})
export class swiperDemoComponent implements OnInit {
  boxKV: Swiper;
  slides = swiperImg;

  constructor() {}

  ngAfterViewInit() {
    this.boxKV = new Swiper('.swiper-container', {
  		pagination: {
  			el: ".swiper-pagination",  // 分頁物件
  		},
      navigation: {
  			nextEl: ".swiper-button-next", // 上一頁按鈕物件
  			prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  		},
      spaceBetween: 30,
      autoplay: true
    });
  }

  ngOnInit() {
  }

}
