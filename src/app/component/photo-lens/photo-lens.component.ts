import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-lens',
  templateUrl: './photo-lens.component.html',
  styleUrls: ['./photo-lens.component.scss'],
})
export class PhotoLensComponent implements OnInit, AfterViewInit {
  cursorPositionX: any;
  cursorPositionY: any;
  newCenterPositionX: any;
  newCenterPositionY: any;
  centerX: any;
  centerY: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {
    const container1 = document.getElementById('container1');
    if (container1 !== null) {
      const coords = container1.getBoundingClientRect();
      this.centerX = coords.width / 2;
      this.centerY = coords.height / 2;

      this.cursorPositionX = $event.clientX - this.centerX;
      this.cursorPositionY = $event.clientY - this.centerY;
      const cofX = 2 / 3;
      const cofY = 1 / 4;
      const momvementX = this.cursorPositionX * cofX;
      const momvementY = this.cursorPositionY * cofY;

      this.newCenterPositionX = -momvementX + 'px';
      this.newCenterPositionY = -momvementY + 'px';
    }
  }
}
