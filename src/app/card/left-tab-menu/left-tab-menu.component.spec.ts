import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTabMenuComponent } from './left-tab-menu.component';

describe('LeftTabMenuComponent', () => {
  let component: LeftTabMenuComponent;
  let fixture: ComponentFixture<LeftTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTabMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
