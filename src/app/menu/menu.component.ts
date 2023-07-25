import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MenuService} from './menu.service';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

    private menuService = inject(MenuService);

    menuItems = this.menuService.menuItems;
}
