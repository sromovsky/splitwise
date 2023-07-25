import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import(/* webpackChunkName: "home-component" */ './home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'participants',
        loadComponent: () => import(/* webpackChunkName: "participants-component" */ './participants/participants.component').then(c => c.ParticipantsComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
