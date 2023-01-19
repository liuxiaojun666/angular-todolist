import { Action, createReducer, on } from '@ngrx/store';
import { saveSchedule, updateSchedule } from '../actions/scheduler.actions';
import { deleteSchedule } from './../actions/scheduler.actions';


export const scheduleFeatureKey = 'scheduler';

export interface Schedule {
  title: string;
  id: string;
  status: boolean;
  checked: boolean;
}

export interface State {
  schedule: Schedule[];
}

export const initialState: State = {
  schedule: [
    {title: 'schedule.actions', id: '42ec6d0f-1f4b-48a9-86f4-b71f3c58ba62', status: false, checked: false},
    {title: 'Live Reloading enabled', id: 'a30bdf6f-1a8b-41a6-ac65-d1448356fd5d', status: false, checked: false}
  ]
};


export const reducer = createReducer(
  initialState,
  on(saveSchedule, (state, action) => {
    return {
      schedule: state.schedule.concat(action.schedule).sort((a, b) => {
        if (a.checked && !b.checked) {
          return 1;
        }
        if (!a.checked && b.checked) {
          return -1;
        }
        return 0;
      })
    };
  }),
  on(deleteSchedule, (state, action) => {
    const schedule = state.schedule
      .filter(item => item.id !== action.id);
    return { schedule };
  }),
  on(updateSchedule, (state, { id, checked }) => {
    const schedule = state.schedule
      .map(item => {
        const newItem = { ...item };
        if (item.id === id) {
          newItem.checked = checked;
        }
        return newItem;
      }).sort((a, b) => {
        if (a.checked && !b.checked) {
          return 1;
        } else if (!a.checked && b.checked) {
          return -1;
        } else {
          return 0;
        }
      });

    return { schedule };
  })
);

