import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {AlertStore} from './alerts.store';

@Component({
    selector: 'app-alerts',
    standalone: true,
    imports: [CommonModule, NgbAlert],
    templateUrl: './alerts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {

    readonly alertsStore = inject(AlertStore);
}
