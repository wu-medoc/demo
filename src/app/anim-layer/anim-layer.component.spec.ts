import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimLayerComponent } from './anim-layer.component';

describe('AnimLayerComponent', () => {
  let component: AnimLayerComponent;
  let fixture: ComponentFixture<AnimLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
