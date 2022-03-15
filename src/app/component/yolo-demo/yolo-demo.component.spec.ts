import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoloDemoComponent } from './yolo-demo.component';

describe('YoloDemoComponent', () => {
  let component: YoloDemoComponent;
  let fixture: ComponentFixture<YoloDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoloDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoloDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
