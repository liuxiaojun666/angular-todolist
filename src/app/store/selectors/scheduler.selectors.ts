import { createFeatureSelector, createSelector } from '@ngrx/store';
import { scheduleFeatureKey, State } from '../reducers/scheduler.reducer';
import { AppSate } from '../index';

export const selectScheduler = createFeatureSelector<AppSate, State>(scheduleFeatureKey)

export const selectSchedules = createSelector(selectScheduler, state => state.schedule)
