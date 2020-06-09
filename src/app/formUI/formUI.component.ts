import { Component, OnInit, HostBinding } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
declare var $: any;

@Component({
  selector: 'app-formUI',
  templateUrl: './formUI.component.html',
  styleUrls: ['./formUI.component.css'],  
  animations: [ slideInAnimation ]
})
export class formUIComponent implements OnInit {
  // icons toggle
  isActive = true;
  farEyeSlashDefault = ['far', 'eye-slash'];
  farEyeSlash = ['far', 'eye-slash'];
  farEyeSlashCheck = ['far', 'eye'];
  toggle(): boolean {
    return this.isActive = !this.isActive;
  }

  onClickBtn(e) {
    if(this.toggle()) {
      this.farEyeSlashDefault = this.farEyeSlash;
      $('#psw1').attr('type', 'password')
    }else{
      this.farEyeSlashDefault = this.farEyeSlashCheck;
      $('#psw1').attr('type', 'text');
    }
  }

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
