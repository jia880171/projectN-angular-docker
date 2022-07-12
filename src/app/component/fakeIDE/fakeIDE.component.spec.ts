import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeIDEComponent } from './fakeIDE.component';

describe('FakeIDEComponent', () => {
  let component: FakeIDEComponent;
  let fixture: ComponentFixture<FakeIDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeIDEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
