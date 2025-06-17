import { Component, Input } from '@angular/core';
import { Information } from '../../../interfaces/Information';
import { TagComponent } from "../../tags/tag/tag.component";
import { TagDivComponent } from "../../tags/tag-div/tag-div.component";

@Component({
  selector: 'app-information',
  imports: [TagDivComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {

  @Input() information? : Information;
  @Input() isLeft : boolean = false;

}
