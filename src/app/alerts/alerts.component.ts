import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {AlertsService} from './alerts.service';

@Component({
    selector: 'app-alerts',
    standalone: true,
    imports: [CommonModule, NgbAlert],
    templateUrl: './alerts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {

    private alertsService = inject(AlertsService);

    alertItems = this.alertsService.alertItems;
}
