import { Routes } from '@angular/router';
import { HomeComponent } from './home/page/home.component';

export const routes: Routes = [
    {
        path : "home",
        component : HomeComponent
    },
    {
        path : "**",
        redirectTo : "home"
    }
];
