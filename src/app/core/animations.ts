
import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideToRight = trigger('slideInRight', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-100%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('2s cubic-bezier(.54,.01,0,.99)')
  ])
]);

export const slideToLeft = trigger('slideInLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(100%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
    animate('2s cubic-bezier(.54,.01,0,.99)')
  ])
]);
