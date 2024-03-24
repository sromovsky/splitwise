import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import(/* webpackChunkName: "home-component" */ './home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'participants',
        loadComponent: () => import(/* webpackChunkName: "participants-component" */ './participants/participants.component').then(c => c.ParticipantsComponent),
    },
    {
        path: 'new-participant',
        loadComponent: () => import('./new-participant/new-participant.component').then(c => c.NewParticipantComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
