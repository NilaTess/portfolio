import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../../core/models/projects';
import { Project } from '../../../core/interfaces/Project';
import { CommonModule } from '@angular/common';
import { TagComponent } from "../../../core/components/tags/tag/tag.component";

@Component({
  selector: 'app-project',
  standalone : true,
  imports: [
    CommonModule,
],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  slug: string | null = null;
  project?: Project;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.project = projects.filter(project => project.slug == this.slug)[0];
    console.log(this.project)
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  
}
