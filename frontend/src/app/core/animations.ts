
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ElementRef, QueryList } from '@angular/core';

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


export function enterObserverElements(options: {threshold: number}){

    return new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);

}

export function observeNativeElements(animationElements: QueryList<ElementRef<any>>, observer:  IntersectionObserver){

    animationElements.forEach(el => {
      observer.observe(el.nativeElement);
    });

}