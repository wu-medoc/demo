import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Hero } from './../interfaceData';
export enum Color {Red, Green, Blue};

@Component({
  selector: 'app-templeate',
  templateUrl: './templeate.component.html',
  styleUrls: ['./templeate.component.css']
})
export class TempleateComponent implements AfterViewInit, OnInit {

  //初始化
  ngOnInit() {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  @ViewChildren('noTrackBy')   heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;

  actionName = 'Go for it';
  NgBadCurly = 'bad curly';
  classes = 'special';
  help = '';

  alert(msg?: string)      { window.alert(msg); }
  callFax(value: string)   { this.alert(`Faxing ${value} ...`); }
  callPhone(value: string) { this.alert(`Calling ${value} ...`); }
  canSave =  true;

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  clicked = '';
  clickMessage = '';
  clickMessage2 = '';
  Color = Color;
  color = Color.Red;
  colorToggle() {this.color = (this.color === Color.Red) ? Color.Blue : Color.Red; }

  // defined
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  fontSizePx = 16;
  title = 'Template Syntax';
  getVal(): number { return 2; }
  name: string = Hero.heroes[0].name;
  hero: Hero;
  heroes: Hero[];

  colors: string;
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;
  heroImageUrl = 'img/hero.png';
  villainImageUrl = 'img/villain.png';
  iconUrl = 'img/ng-logo.png';
  nullCustomer = null;
  isActive = false;
  isSpecial = true;
  isUnchanged = true;
  get nullHero(): Hero { return null; }
  currentHero: Hero;

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

  updateCurrentHeroName(event: Event) {
    this.currentHero.name = (event.target as any).value;
  }

  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className  : '';
    this.alert('Click me.' + evtMsg);
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onSubmit(data: any) {/* referenced but not used */}

  product = {
    name: 'frimfram',
    price: 42
  };

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
    // CSS classes: added/removed per current state of component properties 根據組件屬性的當前狀態添加/刪除
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }
  
  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties 根據組件屬性的當前狀態設置
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  trackById(index: number, item: any): number { return item.id; }

}

// helper to track changes to viewChildren 幫助來跟蹤viewChildren的變化
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      // 檢查每個更改的元素是否都與舊元素相同且位置相同
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        // 等一下，因為在構造視圖之後調用
        setTimeout(changed, 0);
      }
  });
}