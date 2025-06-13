import {AfterViewInit, Component, ElementRef, HostBinding, inject, QueryList, ViewChildren} from '@angular/core';
import { slideToLeft, slideToRight } from '../core/animations';

@Component({
  selector: 'app-personal-summary',
  standalone : true,
  imports: [
  ],
  templateUrl: './personal-summary.component.html',
  styleUrl: './personal-summary.component.scss',
  animations: [
    slideToRight,
    slideToLeft
  ]
})
export class PersonalSummaryComponent implements AfterViewInit {

  @ViewChildren('slideElement') animationElements!: QueryList<ElementRef>;

  visibleStates: string[] = [];
  elements = [1, 2];

  ngAfterViewInit() {
    const options = {
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);

    this.animationElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
    
  }
}
