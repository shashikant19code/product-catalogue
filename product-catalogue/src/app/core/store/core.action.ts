import { Action } from '@ngrx/store';

export enum CoreActionType {
    SET_DAYNIGHT_MODE = 'SET_DAYNIGHT_MODE',
}

export class SetDayNightMode implements Action {
    readonly type = CoreActionType.SET_DAYNIGHT_MODE;
    constructor(
        public payload: any
    ) { }
}

export type CoreActionAction =
    | SetDayNightMode;
