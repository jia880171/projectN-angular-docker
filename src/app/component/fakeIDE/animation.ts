import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Animation = {
  cubeRotation: trigger('cubeRotation', [
    state('roationStart', style({})),
    state('rotationStop', style({})),
    transition('* <=> *', [
      animate(
        1000,
        keyframes([
          style({
            transform: 'rotate(0deg)',
            offset: 0,
          }),
          style({
            transform: 'rotate(90deg)',
            offset: 0.25,
          }),
          style({
            transform: 'rotate(180deg)',
            offset: 0.5,
          }),
          style({
            transform: 'rotate(270deg)',
            offset: 0.75,
          }),
          style({
            transform: 'rotate(360deg)',
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
  codeSection: trigger('codeSection', [
    transition('* => *', [
      animate(
        1000,
        keyframes([
          style({
            // transform: 'scale(0)',
            opacity: 0,
            offset: 0,
          }),

          style({
            // transform: 'scale(0.5)',
            opacity: 0.5,
            offset: 0.5,
          }),

          style({
            // transform: 'scale(1)',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
  problemsSection: trigger('problemsSection', [
    transition('* => *', [
      animate(
        3000,
        keyframes([
          style({
            // transform: 'scale(0)',
            opacity: 0,
            offset: 0,
          }),

          style({
            // transform: 'scale(0.5)',
            opacity: 0,
            offset: 0.5,
          }),

          style({
            // transform: 'scale(1)',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),

  solutionPanelSlide: trigger('solutionPanelSlide', [
    state('hidden', style({ opacity: 0, top: '5vh', right: '-30vw' })),
    state('slideIn', style({ opacity: 1, top: '5vh' })),
    transition('hidden => slideIn', [
      animate(
        1000,
        keyframes([
          style({
            top: '5vh',
            right: '-30vw',
            opacity: 0,
            offset: 0,
          }),
          style({
            right: '0vw',
            opacity: 0.8,
            offset: 0.5,
          }),
          style({
            top: '5vh',
            opacity: 1,
            offset: 1,
          }),
        ])
      ),
    ]),
    transition('slideIn => hidden', [
      animate(
        1000,
        keyframes([
          style({
            top: '5vh',
            opacity: 1,
            offset: 0,
          }),
          style({
            right: '-0vw',
            opacity: 0.75,
            offset: 0.25,
          }),
          style({
            right: '-20vw',
            opacity: 0.5,
            offset: 0.5,
          }),
          style({
            top: '5vh',
            right: '-30vw',
            opacity: 0,
            offset: 1,
          }),
        ])
      ),
    ]),
  ]),
};
