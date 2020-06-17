import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimDetailComponent } from './anim-detail.component';

describe('AnimDetailComponent', () => {
  let component: AnimDetailComponent;
  let fixture: ComponentFixture<AnimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
