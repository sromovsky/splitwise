import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuItemsStore} from './menu.store';
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

    private readonly menuItemsStore = inject(MenuItemsStore);

    menuItems = this.menuItemsStore.menuItems;
}
