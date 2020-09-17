import { CoreActionType, CoreActionAction } from './core.action';
import { CoreState } from './core.model';

export function CoreReducer(state: CoreState = new CoreState(), action: CoreActionAction):
CoreState {
    switch (action.type) {
        case CoreActionType.SET_DAYNIGHT_MODE:
            return {
                ...state,
                dayNightMode: action.payload
            };
        default:
            return state;
    }
}

