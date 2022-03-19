import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-lens',
  templateUrl: './photo-lens.component.html',
  styleUrls: ['./photo-lens.component.scss'],
})
export class PhotoLensComponent implements OnInit, AfterViewInit {
  centerX: number = 0;
  centerY: number = 0;
  cursorPositionX: number = 0;
  cursorPositionY: number = 0;
  newCenterPositionX: string = '';
  newCenterPositionY: string = '';

  scaleNum: number = 1;
  scaleString: string = '';
  deltaY: number = 0;

  RouteBodyPersentage = 0.85;

  container1: any;
  coords: any;
  constructor() {}

  ngOnInit(): void {
    this.container1 = document.getElementById('container1');
    this.coords = this.container1.getBoundingClientRect();
    this.centerX = this.coords.width / this.RouteBodyPersentage / 2;
    this.centerY = this.coords.height / 2;
  }

  ngAfterViewInit(): void {}

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {
    if (this.container1 !== null) {
      this.cursorPositionX = $event.clientX - this.centerX;
      this.cursorPositionY = $event.clientY - this.centerY;

      const cofX = 0.9;
      // const cofX = 1;
      // const cofY = 1 / 4;
      const cofY = 1;
      const momvementX = this.cursorPositionX * cofX;
      const momvementY = this.cursorPositionY * cofY;

      this.newCenterPositionX = -momvementX + 'px';
      this.newCenterPositionY = -momvementY + 'px';
    }
  }

  @HostListener('wheel', ['$event'])
  wheelScroll($event: WheelEvent): void {
    this.deltaY = $event.deltaY;
    // $event.deltaY > 0: scroll down
    if ($event.deltaY > 0 && this.scaleNum > 1) {
      this.scaleNum = 1;
      this.scaleString = 'scale(' + this.scaleNum + ')';
    }

    this.scaleNum -= $event.deltaY * 0.005;

    if (this.scaleNum < 0) {
      this.scaleNum = 0;
    }

    this.scaleString = 'scale(' + this.scaleNum + ')';
  }
}
