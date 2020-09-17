import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoreState } from './core.model';

export const getMode = createFeatureSelector('CoreReducer');

export const getDayNightMode = createSelector(getMode, (state: CoreState) => {
    return state.dayNightMode;
});

