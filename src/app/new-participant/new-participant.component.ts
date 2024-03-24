import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {TranslateModule} from '@ngx-translate/core';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ParticipantStore} from '../participants/participant.store';

@Component({
    selector: 'app-new-participant',
    standalone: true,
    imports: [
        MatLabel,
        MatInput,
        MatFormField,
        TranslateModule,
        MatFabButton,
        MatIcon,
        RouterLink,
        ReactiveFormsModule
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
