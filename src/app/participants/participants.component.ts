import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantStore} from './participant.store';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-participants',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './participants.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsComponent {

    readonly participantStore = inject(ParticipantStore);
}
