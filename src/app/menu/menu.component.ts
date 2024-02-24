import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuItemsStore} from '../stores/menu.store';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive,
        TranslateModule
    ],
    templateUrl: './menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

    readonly menuItemsStore = inject(MenuItemsStore);
}
