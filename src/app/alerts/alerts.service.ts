import {Injectable, signal} from '@angular/core';
import {Alert} from './alert.interface';

@Injectable({
    providedIn: 'root'
})
export class AlertsService {

    alertItems = signal<Alert[]>([]);
}
