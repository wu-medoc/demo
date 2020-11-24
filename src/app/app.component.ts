import { Component, HostBinding, OnInit, Output, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interfaceData } from './interfaceData';
import { SwiperOptions } from 'swiper';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent implements OnInit {
  public lazyHide = false;
  /** 列表選單 */
  public boxTabs: SwiperOptions = {
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
    },
    history: {
      replaceState: true,
    },
    on: {
      slideChange: () => {
        // get active AreaItem, get its code, and navigate on map
      }
    }
  };

  slidestab = interfaceData;


  /** 頁面切換 */
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  public transX = '';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // indexOf()返回找到的位置>0，找不到則返回-1
        (event.url.indexOf('lazy') > 0) ? this.lazyHide = true : this.lazyHide = false;
      }
    });
  }
  ngOnInit() {
    if (document.location.pathname.length > 0) {
      this.boxTabs.initialSlide = this.slidestab.filter(item => item.routerLink === document.location.pathname)[0].id;
      if (this.boxTabs.initialSlide === 1){
        this.boxTabs.initialSlide = 0;
      }
    }
    console.log(document.location.pathname + ' | ' +  this.boxTabs.initialSlide);
  }

}

