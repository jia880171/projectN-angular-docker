import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
  group,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({ 'background-color': 'blue', transform: 'translateX(100px)' })
      ),
      transition('normal <=> highlighted', animate(300)),
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(800)),
      transition('highlighted => normal', animate(500)),
      transition('* => shrunken', [
        animate(
          1000,
          style({
            backgroundColor: 'blue',
            borderRadius: '20px',
            transform: 'scale(0.75)',
          })
        ),
      ]),
      transition('shrunken => *', [
        animate(
          1000,
          style({
            backgroundColor: 'blue',
            borderRadius: '20px',
            transform: 'scale(0.75)',
          })
        ),
      ]),
    ]),
    trigger('stateOfList1', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(600),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger('stateOfList2', [
      transition('void => *', [
        animate(
          600,
          keyframes([
            style({
              transform: 'translateX(-100px)',
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: 'translateX(-50px)',
              opacity: 0.5,
              offset: 0.5,
            }),
            style({
              transform: 'translateX(0px)',
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  constructor() {}

  ngOnInit(): void {}

  onAdd(item: any): void {
    this.list.push(item);
  }
  onDelete(index: any): void {
    console.warn(this.list);
    this.list.splice(index, 1);
    console.warn(this.list);
  }

  onAnimate(): void {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
    // console.warn(this.state);
    // console.warn(this.wildState);
  }
  onShrink(): void {
    this.wildState = 'shrunken';
  }
  animationStarted(event: any): void {
    console.log(event);
  }
  animationEnded(event: any): void {
    console.log(event);
  }
}
