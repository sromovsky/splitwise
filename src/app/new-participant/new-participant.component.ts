import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ParticipantStore} from '../participants/participant.store';
import {PageTitleComponent} from '../page-title/page-title.component';
import {CardComponent} from '../card/card.component';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';

@Component({
    selector: 'app-new-participant',
    standalone: true,
    imports: [
        TranslateModule,
        RouterLink,
        ReactiveFormsModule,
        PageTitleComponent,
        CardComponent,
        ButtonComponent,
        IconComponent
    ],
    templateUrl: './new-participant.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewParticipantComponent {

    private readonly participantStore = inject(ParticipantStore);
    private readonly formBuilder = inject(FormBuilder);
    private readonly router = inject(Router);

    formGroup = this.formBuilder.group({
        firstName: '',
        lastName: ''
    });

    addParticipant() {
        this.participantStore.addParticipant({
            firstName: this.formGroup.value.firstName || '',
            lastName: this.formGroup.value.lastName || ''
        });

        this.router.navigate(['participants']).then();
    }
}
