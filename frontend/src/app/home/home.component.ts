import { Component } from '@angular/core';
import { PersonalSummaryComponent } from '../personal-summary/personal-summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PersonalSummaryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
