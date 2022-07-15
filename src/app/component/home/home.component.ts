import { Animation } from './animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animation.autoSwitch],
})
export class HomeComponent implements OnInit {
  statusForPictires = ['display', 'hiddenDown', 'hiddenDown'];
  displayIndex = 0;
  switchInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.switchInterval = setInterval(() => {
      if (this.displayIndex - 1 < 0) {
        this.statusForPictires[this.statusForPictires.length - 1] = 'hiddenUp';
      } else {
        this.statusForPictires[this.displayIndex - 1] = 'hiddenUp';
      }

      if (this.displayIndex !== this.statusForPictires.length - 1) {
        this.statusForPictires[this.displayIndex + 1] = 'hiddenDown';
      } else {
        this.statusForPictires[0] = 'hiddenDown';
      }

      this.statusForPictires[this.displayIndex] = 'display';

      if (this.displayIndex !== this.statusForPictires.length - 1) {
        this.displayIndex++;
      } else {
        this.displayIndex = 0;
      }
      console.log(this.statusForPictires);
    }, 5000);
  }
}
