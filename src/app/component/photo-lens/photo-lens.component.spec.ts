import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLensComponent } from './photo-lens.component';

describe('PhotoLensComponent', () => {
  let component: PhotoLensComponent;
  let fixture: ComponentFixture<PhotoLensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoLensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
