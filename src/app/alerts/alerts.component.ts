import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertStore} from './alerts.store';

@Component({
    selector: 'app-alerts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './alerts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {

    readonly alertsStore = inject(AlertStore);
}
