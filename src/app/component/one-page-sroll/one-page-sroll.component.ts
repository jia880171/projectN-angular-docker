import { Animations } from './anmation';
import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-page-sroll',
  templateUrl: './one-page-sroll.component.html',
  styleUrls: ['./one-page-sroll.component.scss'],
  animations: [Animations.pageScroll, Animations.panelSlide],
})
export class OnePageSrollComponent {
  // hiddenUP hiddenDown showUp showDown
  statusForSection: string[] = ['display', 'hiddenDown', 'hiddenDown'];
  lastTriggerTime: number = new Date().getTime();
  activeSection = 0;
  x: number | undefined;
  y: number | undefined;
  pointTo: any;

  damping(deltaY: number): boolean {
    const scrollInterval = 600;
    const strength = 600;
    // if (Math.abs(deltaY) > strength) {
    //   return true;
    // } else
    if (
      new Date().getTime() - this.lastTriggerTime > scrollInterval &&
      Math.abs(deltaY) > 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {
    this.pointTo = document
      .elementFromPoint($event.clientX, $event.clientY)
      ?.tagName.toString();
  }

  @HostListener('wheel', ['$event'])
  wheelScroll($event: WheelEvent): void {
    if (
      this.damping($event.deltaY) &&
      $event.deltaY > 0 &&
      this.activeSection < this.statusForSection.length - 1 &&
      this.pointTo === 'IMG'
    ) {
      this.statusForSection[this.activeSection] = 'hiddenUp';
      this.activeSection++;
      this.statusForSection[this.activeSection] = 'display';
      this.lastTriggerTime = new Date().getTime();
      console.log(this.statusForSection);
    } else if (
      this.damping($event.deltaY) &&
      $event.deltaY < 0 &&
      this.activeSection > 0 &&
      this.pointTo === 'IMG'
    ) {
      this.statusForSection[this.activeSection] = 'hiddenDown';
      this.activeSection--;
      this.statusForSection[this.activeSection] = 'display';
      this.lastTriggerTime = new Date().getTime();
      console.log(this.statusForSection);
    }
  }

  animationStarted(event: any): void {
    // console.time('start');
    // console.timeEnd('start');
  }
  animationEnded(event: any): void {
    // console.time('end');
    // console.timeEnd('end');
  }
}
