import { Component, Input } from '@angular/core';
import { Tag } from '../../../interfaces/tag';
import { TagComponent } from "../tag/tag.component";

@Component({
  selector: 'app-tag-div',
  imports: [TagComponent],
  templateUrl: './tag-div.component.html',
  styleUrl: './tag-div.component.scss'
})
export class TagDivComponent {

  @Input() tagList? : Tag[] = [];
  @Input() isDark : boolean = false;

}
