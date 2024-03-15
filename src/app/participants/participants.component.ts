import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantStore} from './participant.store';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TableComponent} from '../table/table.component';
import {TableColumn} from '../table/table-column.model';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';

@Component({
    selector: 'app-participants',
    standalone: true,
    imports: [CommonModule, TranslateModule, TableComponent, MatIcon, MatFabButton],
    templateUrl: './participants.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsComponent {

    private readonly participantStore = inject(ParticipantStore);
    private readonly translateService = inject(TranslateService);

    participants = this.participantStore.participants;

    readonly columns: TableColumn[] = [
        {
            identifier: 'firstName',
            label: this.translateService.instant('participants.firstName')
        },
        {
            identifier: 'lastName',
            label: this.translateService.instant('participants.lastName')
        }
    ];
}
