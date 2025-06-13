import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { slideToLeft, slideToRight } from '../../../animations';
import { Information } from '../../interfaces/Information';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-information-div',
  imports: [
    InformationComponent
  ],
  templateUrl: './information-div.component.html',
  styleUrl: './information-div.component.scss',
  animations: [
      slideToRight,
      slideToLeft
    ]
})
export class InformationDivComponent {

  @ViewChild('slideElement') slideElement!: ElementRef;

  @Input() divName : string = "Default";
  @Input() informationsList : Information[] = [];
  // Animation
  @Input() visibleElement : string = "hidden";
}
