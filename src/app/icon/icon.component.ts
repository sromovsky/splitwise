import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

    icon = input.required<string>();
}
