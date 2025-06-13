import { Component, Input } from '@angular/core';
import { Information } from '../../interfaces/Information';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {

  @Input() information? : Information;
  @Input() isLeft : boolean = false;

}
