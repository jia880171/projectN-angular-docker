import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Animation = {
  hide: trigger('hide', [
    state(
      'display',
      style({
        left: '0vw',
      })
    ),
    state(
      'hide',
      style({
        left: '-5vw',
      })
    ),
    transition('*=>hide', [
      animate(
        500,
        keyframes([
          style({
            offset: 0,
          }),
          style({
            left: '-2.5vw',
            offset: 0.5,
          }),
          style({
            left: '-5vw',
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('*=>display', [
      animate(
        500,
        keyframes([
          style({
            left: '-5vw',
            offset: 0,
          }),
          style({
            left: '-2.5vw',
            offset: 0.5,
          }),
          style({
            left: '0vw',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
};
