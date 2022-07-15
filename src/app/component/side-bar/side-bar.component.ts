import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  isHoverOnSideBar = false;
  isOnTheLeft = false;
  constructor(private router: Router) {}
  body: HTMLElement | null | undefined;

  ngOnInit(): void {
    this.body = document.body;
  }

  goToServer(): void {
    this.router.navigate(['test/servers']);
  }

  photoLens(): void {
    this.router.navigate(['test/photoLens']);
  }

  goToPhotoContainer(): void {
    this.router.navigate(['test/photoContainer']).then(() => {
      // window.location.reload();
    });
  }

  goToProfile(): void {
    this.router.navigate(['test/profile']).then(() => {
      // window.location.reload();
    });
  }

  goToOnePageScroll(): void {
    this.router.navigate(['test/onePageScroll']).then(() => {
      // window.location.reload();
    });
  }
  goToAnimation(): void {
    this.router.navigate(['test/animation']).then(() => {
      // window.location.reload();
    });
  }
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent): void {

    if (
      $event.clientX <
      // tslint:disable-next-line:no-non-null-assertion
      0
    ) {
      console.log('======== on the left');
      this.isOnTheLeft = true;
    }
  }
  @HostListener('mouseenter')
  public mouseenterListener(): void {
    this.isHoverOnSideBar = true;
  }

  @HostListener('mouseleave')
  public mouseleaveListener(): void {
    if (!this.isOnTheLeft) {
      this.isHoverOnSideBar = false;
    }
  }
}
