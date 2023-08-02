import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {AlertsComponent} from './alerts/alerts.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MenuComponent,
        AlertsComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

}
