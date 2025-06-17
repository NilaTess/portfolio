import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { slideToLeft, slideToRight } from '../../../core/animations';

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
export class PersonalSummaryComponent {

  @Input() visibleElements : string[] = [];

  @ViewChildren('slideElement') slideElements!: QueryList<ElementRef>;



}
