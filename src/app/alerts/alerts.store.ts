import {Alert} from './alert.model';
import {signalStore, withState} from '@ngrx/signals';

type AlertState = {
    alerts: Alert[];
};

const initialState: AlertState = {
    alerts: []
};

export const AlertStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
);
