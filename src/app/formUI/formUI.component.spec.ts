import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { formUIComponent } from './formUI.component';

describe('formUIComponent', () => {
  let component: formUIComponent;
  let fixture: ComponentFixture<formUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ formUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(formUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
