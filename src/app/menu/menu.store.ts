import {MenuItem} from './menu-item.type';
import {signalStore, withState} from '@ngrx/signals';

type MenuState = {
    menuItems: MenuItem[];
};

const initialState: MenuState = {
    menuItems: [{
        code: 'menu-items.home',
        routerLink: ''
    },{
        code: 'menu-items.participants',
        routerLink: 'participants'
    }]
};

export const MenuItemsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
);
