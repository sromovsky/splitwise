import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantStore} from './participant.store';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';

@Component({
    selector: 'app-participants',
    standalone: true,
    imports: [CommonModule, TranslateModule, MatButton],
    templateUrl: './participants.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsComponent {

    readonly participantStore = inject(ParticipantStore);
}
