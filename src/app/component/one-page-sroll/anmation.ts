import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const panelContentMarginTop = '20vh';

export const Animations = {
  pageScroll: trigger('pageScroll', [
    state(
      'display',
      style({
        opacity: 1,
        position: 'fixed',
        top: '0vh',
      })
    ),
    state(
      'hiddenUp',
      style({
        opacity: 0,
        position: 'fixed',
        top: '-100vh',
      })
    ),
    state(
      'hiddenDown',
      style({
        opacity: 0,
        position: 'fixed',
        top: '100vh',
      })
    ),
    transition('display => hiddenUp', [
      animate(
        1000,
        keyframes([
          style({
            position: 'fixed',
            top: '0',
            opacity: 1,
            offset: 0,
          }),
          style({
            position: 'fixed',
            top: '-50vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            top: '-100vh',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('display => hiddenDown', [
      animate(
        1000,
        keyframes([
          style({
            position: 'fixed',
            top: '0',
            opacity: 1,
            offset: 0,
          }),
          style({
            position: 'fixed',
            top: '50vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            top: '100vh',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('hiddenDown => display', [
      animate(
        1000,
        keyframes([
          style({
            position: 'fixed',
            top: '100vh',
            opacity: 0,
            offset: 0,
          }),
          style({
            position: 'fixed',
            top: '50vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            top: '0vh',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('hiddenUp => display', [
      animate(
        1000,
        keyframes([
          style({
            position: 'fixed',
            top: '-100vh',
            opacity: 0,
            offset: 0,
          }),
          style({
            position: 'fixed',
            top: '-50vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            position: 'fixed',
            top: '0vh',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
  panelSlide: trigger('panelSlide', [
    state(
      'display',
      style({
        zIndex: 10,
        opacity: 1,
      })
    ),
    state(
      'hiddenUp',
      style({
        zIndex: 0,
        opacity: 0,
      })
    ),
    state(
      'hiddenDown',
      style({
        zIndex: 0,
        opacity: 0,
      })
    ),
    transition('display => hiddenUp', [
      animate(
        1000,
        keyframes([
          style({
            marginTop: panelContentMarginTop,
            offset: 0,
          }),
          style({
            marginTop: '-40vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            marginTop: '-100vh',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('display => hiddenDown', [
      animate(
        1000,
        keyframes([
          style({
            marginTop: panelContentMarginTop,
            offset: 0,
          }),
          style({
            marginTop: '60vh',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            marginTop: '100vh',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('hiddenDown => display', [
      animate(
        2000,
        keyframes([
          style({
            opacity: 0,
            offset: 0,
          }),
          style({
            marginTop: '100vh',
            opacity: 0,
            offset: 0.5,
          }),
          style({
            marginTop: '60vh',
            opacity: 0.5,
            offset: 0.75,
          }),
          style({
            marginTop: panelContentMarginTop,
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('hiddenUp => display', [
      animate(
        2000,
        keyframes([
          style({
            opacity: 0,
            marginTop: '-70vh',

            offset: 0,
          }),
          style({
            opacity: 0,
            marginTop: '-70vh',
            offset: 0.5,
          }),
          style({
            opacity: 0.5,
            marginTop: '-25vh',
            offset: 0.75,
          }),
          style({
            marginTop: panelContentMarginTop,
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
};
