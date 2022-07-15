import { AfterViewInit, Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-photo-lens',
  templateUrl: './photo-lens.component.html',
  styleUrls: ['./photo-lens.component.scss'],
})
export class PhotoLensComponent implements OnInit, AfterViewInit, OnDestroy {
  containerXBias = 0;
  centerX: number = 0;
  centerY: number = 0;
  cursorPositionX: number = 0;
  cursorPositionY: number = 0;
  newCenterPositionX: string = '';
  newCenterPositionY: string = '';

  scaleNum: number = 1;
  scaleString: string = '';
  deltaY: number = 0;

  RouteBodyPersentage = 0.95;

  container: any;
  coords: any;
  constructor(private snackBar: MatSnackBar) {
    this.snackBar.open('scroll the mouse wheel to zoom the photo!', 'OK', {
      panelClass: 'my-custom-snackbar',
    });
  }

  ngOnDestroy(): void {
    this.snackBar.dismiss();
  }

  ngOnInit(): void {
    this.container = document.getElementById('container');
    this.coords = this.container.getBoundingClientRect();
    this.centerX = this.coords.width / this.RouteBodyPersentage / 2;
    this.centerY = this.coords.height / 2;
    this.containerXBias = this.coords.width * 0.05;
  }

  ngAfterViewInit(): void {}

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {
    if (this.container !== null) {
      // this.cursorPositionX = $event.clientX - this.centerX;
      // this.cursorPositionY = $event.clientY - this.centerY;
      // const cofX = 0.9;
      // const cofY = 1;
      // const momvementX = this.cursorPositionX * cofX;
      // const momvementY = this.cursorPositionY * cofY;
      // this.newCenterPositionX = -momvementX + 'px';
      // this.newCenterPositionY = -momvementY + 'px';

      this.cursorPositionX = $event.clientX - this.containerXBias;
      this.cursorPositionY = $event.clientY - 0;
      this.newCenterPositionX =
        -((this.cursorPositionX - this.centerX) * this.scaleNum) + 'px';
      this.newCenterPositionY =
        -((this.cursorPositionY - this.centerY) * this.scaleNum) + 'px';
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
