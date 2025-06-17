import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Tag } from '../../../interfaces/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  imports: [
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {

  @Input() tag? : Tag;
  @Input() isDark : boolean = false;
}
