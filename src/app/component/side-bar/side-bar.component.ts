import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
}
