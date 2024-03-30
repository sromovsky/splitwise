import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantStore} from './participant.store';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TableComponent} from '../table/table.component';
import {TableColumn} from '../table/table-column.type';
import {RouterLink} from '@angular/router';
import {Participant} from './participant.type';
import {PageTitleComponent} from '../page-title/page-title.component';
import {CardComponent} from '../card/card.component';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';

@Component({
    selector: 'app-participants',
    standalone: true,
    imports: [CommonModule, TranslateModule, TableComponent, RouterLink, PageTitleComponent, CardComponent, ButtonComponent, IconComponent],
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

    readonly columns: TableColumn<Participant>[] = [
        {
            attribute: 'firstName',
            label: this.translateService.instant('participant.firstName')
        },
        {
            attribute: 'lastName',
            label: this.translateService.instant('participant.lastName')
        }
    ];
}
