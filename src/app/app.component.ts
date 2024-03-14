import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {AlertsComponent} from './alerts/alerts.component';
import {MatGridList} from '@angular/material/grid-list';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MenuComponent,
        AlertsComponent,
        MatGridList
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

}
