import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Hero } from './../interfaceData';

@Component({
  selector: 'app-templeate',
  templateUrl: './templeate.component.html',
  styleUrls: ['./templeate.component.css']
})
export class TempleateComponent implements OnInit {

  //初始化
  ngOnInit() {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  @ViewChildren('noTrackBy')   heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;
  constructor() { }

  // defined
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  fontSizePx = 16;
  title = 'Template Syntax';
  name: string = Hero.heroes[0].name;
  hero: Hero;
  heroes: Hero[];
  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;
  heroImageUrl = 'img/hero.png';
  villainImageUrl = 'img/villain.png';
  iconUrl = 'img/ng-logo.png';
  isActive = false;
  isSpecial = true;
  isUnchanged = true;
  get nullHero(): Hero { return null; }
  currentHero: Hero;
  canSave =  true;

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }
  
  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  trackById(index: number, item: any): number { return item.id; }

}

// helper to track changes to viewChildren
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        setTimeout(changed, 0);
      }
  });
}