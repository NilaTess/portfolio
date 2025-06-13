import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { slideToLeft, slideToRight } from '../../core/animations';
import { InformationDivComponent } from "../../core/shared/components/information-div/information-div.component";
import { Information } from '../../core/shared/interfaces/Information';
import { ContactComponent } from "../components/contact/contact.component";
import { PersonalSummaryComponent } from '../components/personal-summary/personal-summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PersonalSummaryComponent,
    ContactComponent,
    InformationDivComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    slideToRight,
    slideToLeft
  ]
})
export class HomeComponent implements AfterViewInit {

  @ViewChildren('slideElement') animationElements!: QueryList<ElementRef>;
  @ViewChildren(PersonalSummaryComponent) personalSummaryElements! : QueryList<PersonalSummaryComponent>;
  @ViewChildren(InformationDivComponent) informationDivElements! : QueryList<InformationDivComponent>;
  


  visibleElements: string[] = ["hidden", "hidden", "hidden", "hidden"];

  observer? : IntersectionObserver;

  ngAfterViewInit(){

    const options = {
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.classList.value)
          if( entry.target.classList.contains('title--item__image')) {
            this.visibleElements[0] = "visible";
          } else if (entry.target.classList.contains('title--items__summary')){
            this.visibleElements[1] = "visible";
          } else if (entry.target.classList.value.includes('EXPERIENCE')) {
            this.visibleElements[2] = "visible";
          } else if (entry.target.classList.value.includes('PROJET')){
            this.visibleElements[3] = "visible";
          }

          obs.unobserve(entry.target);
            
        }
      });
    }, options);


    this.informationDivElements.forEach(el => {
      console.log(el)
      observer.observe(el.slideElement.nativeElement);
    });

    this.personalSummaryElements.forEach(el => {
      el.slideElements.map(el => el.nativeElement).forEach(el => {
        observer.observe(el);
      });    
    });  
    
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }


  sectionInformationsList : {section : string ; informationsList : Information[]}[] = [
    {
      section : "EXPERIENCE",
      informationsList: [
        {
          title: "Tutorat à l'IUT Lyon 1",
          details: "IUT Lyon 1, Villeurbanne | Septembre 2024 - À ce jour",
          description: "Aide au devoirs et à l’apprentissage pour les BUT1 de ma formation"
        },
        {
          title: "Vice-Secrétaire et responsable du Pôle prévention au sein du BDE",
          details: "IUT Lyon 1, Villeurbanne | Mars 2024 - À ce jour",
          description: "Mise en place d’évènements pour les étudiants du BUT informatique"
        },
        {
          title: "Groupe de Musique",
          details: "IUT Lyon 1, France | Septembre 2023 - Juin 2024",
          description: "Création et reprise de chansons"
        },
        {
          title: "Théâtre",
          details: "Collège et Lycée, Lyon 2 | 6ème - Terminale",
          description: "Mise en place de pièces ou représentation de pièces existantes"
        }
      ]
    },
    {
      section: "PROJETS",
      informationsList: [
        {
          title: "Projet de site web permettant la gestion de projet pour des étudiants du BUT informatique",
          details: "IUT Lyon 1, Villeurbanne | Semestre 3 et 4 BUT informatique",
          description: "Inspirée de l'application Notion, cette application orientée IUT informatique permet de créer un espace de travail partagé pour réaliser un projet. Cet espace offre un suivi visuel et dynamique des tâches à réaliser ainsi qu'un aperçu du dépôt Git, élément primordial pour tout projet informatique.",
          languages: "PHP | HTML | CSS | JS"
        },
        {
          title: "Projet d’application de gestion de vol",
          details: "IUT Lyon 1, Villeurbanne | Semestre 2 BUT informatique",
          description: "Permet de simuler une journée de vol grâce à l'importation de données en CSV. L'application simule le vol des avions et renvoie le nombre de collisions possibles durant cette journée. Une carte interactive permet de complexifier la simulation et de rendre l'utilisateur actif. De plus, des paramètres donnent la possibilité d'interagir avec les algorithmes de reconnaissance de collisions.",
          languages: "Java"
        }
      ]
    }
  ]
}
