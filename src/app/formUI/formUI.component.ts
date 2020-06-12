import { Component, OnInit, HostBinding } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

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
  /**
   * ngx-intl-tel-input
   */
	separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}


  /** 密碼可見隱藏icon 
    * onClickBtn切換input type */
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
