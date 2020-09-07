/* tslint:disable use-input-property-decorator use-output-property-decorator */
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from './../interfaceData';

@Component({
  selector: 'app-hero-details',
  // tslint:disable: no-inputs-metadata-property no-outputs-metadata-property
  inputs: ['hero'],
  outputs: ['deleteRequest'],
  // tslint:enable: no-inputs-metadata-property no-outputs-metadata-property
  styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height:24px}'],
  template: `
  <div>
    <img src="{{heroImageUrl}}">
    <span [style.text-decoration]="lineThrough">
      {{prefix}} {{hero?.name}}
    </span>
    <button (click)="delete()">Delete</button>
  </div>`
})
export class HeroDetailsComponent {
  hero: Hero = new Hero(-1, '', 'Zzzzzzzz'); // default sleeping hero
  heroImageUrl = 'img/hero.png';
  lineThrough = '';
  @Input() prefix = '';

  // This component makes a request but it can't actually delete a hero.
  deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}

@Component({
  selector: 'app-big-hero-detail',
  template: `
  <div class="detail">
    <img src="{{heroImageUrl}}">
    <div><b>{{hero?.name}}</b></div>
    <div>Name: {{hero?.name}}</div>
    <div>Emotion: {{hero?.emotion}}</div>
    <div>Birthdate: {{hero?.birthdate | date:'longDate'}}</div>
    <div>Web: <a href="{{hero?.url}}" target="_blank">{{hero?.url}}</a></div>
    <div>Rate/hr: {{hero?.rate | currency:'EUR'}}</div>
    <br clear="all">
    <button (click)="delete()">Delete</button>
  </div>
  `,
  styles: [`
    .detail { border: 1px solid black; padding: 4px; max-width: 450px; }
    img     { float: left; margin-right: 8px; height: 100px; }
  `]
})
export class BigHeroDetailComponent extends HeroDetailsComponent {

  @Input()  hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
  }
}