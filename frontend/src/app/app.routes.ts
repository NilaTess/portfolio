import { Routes } from '@angular/router';
import { HomeComponent } from './home/page/home.component';
import { ProjectComponent } from './projects/page/project/project.component';

export const routes: Routes = [
    {
        path : "home",
        component : HomeComponent
    },
    {
        path : "project/:slug",
        component : ProjectComponent
    },
    {
        path : "**",
        redirectTo : "home"
    }
];
