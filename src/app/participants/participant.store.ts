import {Participant} from './participant.type';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

type ParticipantState = {
    participants: Participant[];
};

const initialState: ParticipantState = {
    participants: []
};

export const ParticipantStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        addParticipant(participant: Participant): void {
            patchState(store, (state) => ({ participants: [...state.participants, participant] }));
        }
    }))
);
