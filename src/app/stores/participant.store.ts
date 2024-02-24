import {Participant} from '../models/participant.model';
import {signalStore, withState} from '@ngrx/signals';

type ParticipantState = {
    participants: Participant[];
};

const initialState: ParticipantState = {
    participants: []
};

export const ParticipantStore = signalStore(
    { providedIn: 'root' },
    withState(initialState)
);
