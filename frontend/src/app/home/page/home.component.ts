import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { slideToLeft, slideToRight } from '../../core/animations';
import { InformationDivComponent } from "../../core/components/informations/information-div/information-div.component";
import { Information } from '../../core/interfaces/Information';
import { ContactComponent } from "../components/contact/contact.component";
import { PersonalSummaryComponent } from '../components/personal-summary/personal-summary.component';
import { Project } from '../../core/interfaces/Project';
import { ProjectDivComponent } from "../../projects/project-div/project-div.component";
import { projects } from '../../core/models/projects';
import { NavComponent } from "../../nav/nav.component";
import { sectionInformationList } from '../../core/models/sectionInformationList';
import { CompetenceComponent } from "../components/competence/competence.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PersonalSummaryComponent,
    ContactComponent,
    InformationDivComponent,
    ProjectDivComponent,
    NavComponent,
    CompetenceComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    slideToRight,
    slideToLeft
  ]
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(ProjectDivComponent) projectDivElement! : ProjectDivComponent;
  @ViewChildren(PersonalSummaryComponent) personalSummaryElements! : QueryList<PersonalSummaryComponent>;
  @ViewChildren(InformationDivComponent) informationDivElements! : QueryList<InformationDivComponent>;
  


  visibleElements: string[] = ["hidden", "hidden", "hidden", "hidden", "hidden"];

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
          } else if (entry.target.classList.value.includes('FORMATION')){
            this.visibleElements[3] = "visible";
          } else {
            this.visibleElements[4] = "visible";
          }

          obs.unobserve(entry.target);
            
        }
      });
    }, options);


    observer.observe(this.projectDivElement.slideElement.nativeElement);

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


  sectionInformationsList : {section : string ; informationsList : Information[]}[] = sectionInformationList;

  projectInformations : Project[] = projects;
}
