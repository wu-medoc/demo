import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortpageComponent } from './sortpage.component';

describe('SortpageComponent', () => {
  let component: SortpageComponent;
  let fixture: ComponentFixture<SortpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
