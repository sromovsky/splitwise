import {MenuItem} from '../models/menu-item.model';
import {signalStore, withState} from '@ngrx/signals';

type MenuState = {
    menuItems: MenuItem[];
};

const initialState: MenuState = {
    menuItems: [
        {
            code: 'menu-items.participants',
            routerLink: 'participants'
        }
    ]
};

export const MenuItemsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
);
