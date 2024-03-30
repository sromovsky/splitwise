import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

    variant = input<'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'>('primary');
}
