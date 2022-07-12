import { AnimationService } from './animation.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { PostModel } from './post.model';
import { Subscription } from 'rxjs';

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
export class AnimationComponent implements OnInit, OnDestroy {
  state = 'normal';
  wildState = 'normal';
  list: PostModel[] = [];
  error: string | null | undefined;

  errorSub: Subscription | undefined;
  itemSub: Subscription | undefined;
  removeItemSub: Subscription | undefined;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    // this.errorSub = this.animationService.error.subscribe((errorMessage) => {
    //   this.error = errorMessage;
    // });
    // this.itemSub = this.animationService.itemListenerSubject.subscribe(
    //   (item) => {
    //     this.list.push(new PostModel(item));
    //   }
    // );

    this.getItems();
  }

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe();
    this.itemSub?.unsubscribe();
    this.removeItemSub?.unsubscribe();
  }

  getItems(): any {
    this.animationService.onClickGetItems();
  }
  addItem(item: string): void {
    this.animationService.addItem(item);
  }

  deleteItem(item: PostModel, i: number): void {
    if (item.id) {
      this.animationService.deleteItem(item);
    }
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
