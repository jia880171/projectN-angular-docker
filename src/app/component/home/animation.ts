import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Animation = {
  autoSwitch: trigger('autoSwitch', [
    state(
      'display',
      style({
        position: 'fixed',
        top: '0vh',
      })
    ),
    state(
      'hiddenDown',
      style({
        position: 'fixed',
        top: '300vh',
      })
    ),
    state(
      'hiddenUp',
      style({
        position: 'fixed',
        top: '-300vh',
      })
    ),
    transition('display=>hiddenUp', [
      animate(
        2000,
        keyframes([
          style({
            zIndex: 1,
            opacity: 1,
            position: 'fixed',
            top: '0vh',
            offset: 0,
          }),
          style({
            position: 'fixed',
            opacity: 0.8,
            top: '-25vh',
            offset: 0.25,
          }),
          style({
            position: 'fixed',
            opacity: 0.6,
            top: '-50vh',
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            opacity: 0.3,
            top: '-75vh',
            offset: 0.75,
          }),
          style({
            opacity: 0,
            position: 'fixed',
            top: '-100vh',
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('hiddenDown=>display', [
      animate(
        2000,
        keyframes([
          style({
            zIndex: 2,
            position: 'fixed',
            top: '100vh',
            offset: 0,
          }),
          style({
            position: 'fixed',
            top: '75vh',
            offset: 0.25,
          }),
          style({
            position: 'fixed',
            top: '50vh',
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            top: '25vh',
            offset: 0.75,
          }),
          style({
            position: 'fixed',
            top: '0vh',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
};
