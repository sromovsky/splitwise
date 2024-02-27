import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuItemsStore} from './menu.store';
import {TranslateModule} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive,
        TranslateModule,
        MatIcon,
        MatIconButton,
        MatToolbar,
        MatMenuTrigger,
        MatButton
    ],
    templateUrl: './menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

    readonly menuItemsStore = inject(MenuItemsStore);
}
