import { createAction, props } from '@ngrx/store';
import { Schedule } from '../reducers/scheduler.reducer';

export const loadSchedules = createAction('loadSchedules');

export const saveSchedule = createAction('saveSchedule', props<{schedule: Schedule}>());

export const deleteSchedule = createAction('deleteSchedule', props<{id: string}>());

export const updateSchedule = createAction('updateSchedule', props<{id: string, checked: boolean}>());




