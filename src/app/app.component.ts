import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }  
}