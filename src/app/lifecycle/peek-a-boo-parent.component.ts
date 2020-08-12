import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template: `
  <div class="parent p-4">
    <h2>Peek-A-Boo</h2>

    <button (click)="toggleChild()" class="btn btn-outline-dark">
      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
    </button>
    <button (click)="updateHero()" [hidden]="!hasChild" class="btn btn-sm btn-outline-dark">Update Hero</button>

    <peek-a-boo *ngIf="hasChild" [name]="heroName">
    </peek-a-boo>

    <h4>-- Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of hookLog">{{msg}}</div>
  </div>
  `,
  styles: ['.parent {background: moccasin}'],
  providers:  [ LoggerService ]
})
export class PeekABooParentComponent {

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}


/*
-- Lifecycle Hook Log --
--Create PeekABooComponent
--Now you see my hero, Windstorm
#1 name is not known at construction
#2 OnChanges: name initialized to "Windstorm"(在ngOnint前會呼叫一次，或者是一個或多個綁定的input property發生變化時)
#3 OnInit(在首次ngOnChanges完成之後觸發，只會發生一次)
#4 DoCheck(在每個Angular檢測變化的周期中呼叫，最快會發生在首次ngOnChanges和ngOnInit之後)
#5 AfterContentInit(在首次ngDoCheck後發生，只呼叫一次)
#6 AfterContentChecked(ngAfterContentInit和每次NgDoCheck之後呼叫)
#7 AfterViewInit(在首次ngAfterContentChecked後發生，且只會呼叫一次)
#8 AfterViewChecked(ngAfterViewInit和每次ngAfterContentChecked之後呼叫)
#9 DoCheck
#10 AfterContentChecked
#11 AfterViewChecked
--Update Hero
--Now you see my hero, Windstorm!
#12 OnChanges: name changed to "Windstorm!"
#13 DoCheck(檢測Component或Directive的變化)
#14 AfterContentChecked
#15 AfterViewChecked
--Destroy PeekABooComponent
#16 DoCheck
#17 AfterContentChecked
#18 AfterViewChecked
#19 OnDestroy(在Angular銷毀Component及Directive前呼叫)
*/