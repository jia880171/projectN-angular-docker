import { Animation } from './animation';
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [Animation.hide],
})
export class RootComponent implements OnInit, AfterViewInit {
  isHoverOnSideBar = false;
  hideState = 'display';
  pointTo: string | undefined;
  body: HTMLElement | null | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.body = document.body;
    this.hideState = 'hide';
  }
  ngAfterViewInit(): void {}

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {
    this.pointTo = document
      .elementFromPoint($event.clientX, $event.clientY)
      ?.tagName.toString();
    // console.log($event.clientX, ' ', $event.clientY);
    if (
      $event.clientX <
      // tslint:disable-next-line:no-non-null-assertion
      this.body!.getBoundingClientRect().width * 0.05
    ) {
      this.isHoverOnSideBar = true;
      this.hideState = 'display';
    } else if (
      this.isHoverOnSideBar &&
      // tslint:disable-next-line:no-non-null-assertion
      $event.clientX < this.body!.getBoundingClientRect().width * 0.1
    ) {
      this.hideState = 'display';
    } else {
      this.hideState = 'hide';
      this.isHoverOnSideBar = false;
    }
  }
}
