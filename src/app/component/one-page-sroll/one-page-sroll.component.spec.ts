import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageSrollComponent } from './one-page-sroll.component';

describe('OnePageSrollComponent', () => {
  let component: OnePageSrollComponent;
  let fixture: ComponentFixture<OnePageSrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePageSrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageSrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
