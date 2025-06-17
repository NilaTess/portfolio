import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Skill } from '../../../core/interfaces/Skill';
import { personalSkills, professionalSkills } from '../../../core/models/competences';

@Component({
  selector: 'app-competence',
  imports: [
    DragDropModule
  ],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.scss'
})
export class CompetenceComponent {

  @ViewChild('resetSvg') resetSvg!: ElementRef;

  professionalSkills : Skill[] = [...professionalSkills];
  personalSkills : Skill[] = [...personalSkills];

  drop(event: CdkDragDrop<Skill[]>) {
    if (event.previousContainer === event.container) {
      // Réordonne dans la même colonne
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transfert entre colonnes
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  onReset(): void {
    this.rotateSvg('315deg');
    this.reset();
  }

  onMouseOver(): void {
    this.rotateSvg('45deg');
  }

  onMouseLeave(): void {
    this.rotateSvg('-45deg');
  }

  private rotateSvg(degrees: string): void {
    this.resetSvg.nativeElement.style.transform = `rotate(${degrees})`;
  }

  private reset(): void {
    console.log("caca")
    this.professionalSkills = [...professionalSkills];
    this.personalSkills = [...personalSkills];
  }

}
