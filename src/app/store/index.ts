import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSchedule from './reducers/scheduler.reducer';

export interface AppSate {
  [fromSchedule.scheduleFeatureKey]: fromSchedule.State;
}

export const reducers: ActionReducerMap<AppSate> = {
  [fromSchedule.scheduleFeatureKey]: fromSchedule.reducer,
};


export const metaReducers: MetaReducer<AppSate>[] = !environment.production ? [] : [];
