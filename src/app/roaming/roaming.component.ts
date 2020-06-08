import { Component, OnInit, HostBinding } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../animations';

declare var $: any;

@Component({
  selector: 'app-roaming',
  templateUrl: './roaming.component.html',
  styleUrls: ['./roaming.component.css'],  
  animations: [ slideInAnimation ]
})
export class RoamingComponent implements OnInit {
  /** 動畫換頁 */
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }  

  constructor() { }
  
  ngAfterViewInit() {   
  }

  ngOnInit() {
  }

}
