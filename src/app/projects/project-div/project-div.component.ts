import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InformationComponent } from "../../core/components/informations/information/information.component";
import { Project } from '../../core/interfaces/Project';
import { slideToRight } from '../../core/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-div',
  imports: [InformationComponent],
  templateUrl: './project-div.component.html',
  styleUrl: './project-div.component.scss',
  animations: [
    slideToRight,
  ]

})
export class ProjectDivComponent {

   @ViewChild('slideElement') slideElement!: ElementRef;

  @Input() projectList : Project[] = [];
  @Input() visibleElement : string = "hidden";

  constructor(private readonly router: Router) {}

  goToProject(slug: string): void {
    console.log("salut");
    this.router.navigate(['/project', slug]);
  }

}
