import { Animation } from './animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animation.autoSwitch, Animation.autoWhiteOutSwitch],
})
export class HomeComponent implements OnInit {
  statusForUpperPictires = [
    'display',
    'hiddenDown',
    'hiddenDown',
    'hiddenDown',
  ];
  statusForBottomPictires = [
    'display',
    'hiddenDown',
  ];

  upperDisplayIndex = 0;
  bottomDisplayIndex = 0;

  switchInterval: any;

  constructor() {
    this.starWhiteOut( this.statusForBottomPictires, this.upperDisplayIndex);
    this.starWhiteOut( this.statusForUpperPictires, this.bottomDisplayIndex);

  }

  ngOnInit(): void {
    // this.switchInterval = setInterval(() => {
    //   if (this.displayIndex - 1 < 0) {
    //     this.statusForPictires[this.statusForPictires.length - 1] = 'hiddenUp';
    //   } else {
    //     this.statusForPictires[this.displayIndex - 1] = 'hiddenUp';
    //   }
    //   if (this.displayIndex !== this.statusForPictires.length - 1) {
    //     this.statusForPictires[this.displayIndex + 1] = 'hiddenDown';
    //   } else {
    //     this.statusForPictires[0] = 'hiddenDown';
    //   }
    //   this.statusForPictires[this.displayIndex] = 'display';
    //   if (this.displayIndex !== this.statusForPictires.length - 1) {
    //     this.displayIndex++;
    //   } else {
    //     this.displayIndex = 0;
    //   }
    //   console.log(this.statusForPictires);
    // }, 5000);
  }

  private starWhiteOut( status: Array<string>, index: number): void {
    console.log('====start');
    setInterval(() => {
      if (index !== status.length - 1) {
        status[index + 1] = 'nextToDisplay';
      } else {
        status[0] = 'nextToDisplay';
      }

      if (index !== status.length - 1) {
        index++;
      } else {
        index = 0;
      }

      if (index - 1 < 0) {
        status[status.length - 1] =
          'hiddenDown';
      } else {
        status[index - 1] = 'hiddenDown';
      }

      status[index] = 'display';

      console.log(status);
    }, 3600);
  }
}
