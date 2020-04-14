import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { swiperDemoComponent } from './swiperDemo.component';

describe('swiperDemoComponent', () => {
  let component: swiperDemoComponent;
  let fixture: ComponentFixture<swiperDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ swiperDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(swiperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
