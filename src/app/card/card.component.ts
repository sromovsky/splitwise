import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        TranslateModule
    ],
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
