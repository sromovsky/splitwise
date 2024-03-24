import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantStore} from './participant.store';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TableComponent} from '../table/table.component';
import {TableColumn} from '../table/table-column.type';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
    selector: 'app-participants',
    standalone: true,
    imports: [CommonModule, TranslateModule, TableComponent, MatIcon, MatFabButton, RouterLink, MatCard, MatCardContent],
    templateUrl: './participants.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsComponent {

    private readonly participantStore = inject(ParticipantStore);
    private readonly translateService = inject(TranslateService);

    participants = this.participantStore.participants;
    hasParticipants = computed(() => {
        return !!this.participants().length;
    });

    readonly columns: TableColumn[] = [
        {
            identifier: 'firstName',
            label: this.translateService.instant('participant.firstName')
        },
        {
            identifier: 'lastName',
            label: this.translateService.instant('participant.lastName')
        }
    ];
}
