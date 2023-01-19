import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppSate } from './../../store/index';
import * as fromSchedule from '../../store/reducers/scheduler.reducer';
import { Observable } from 'rxjs';
import { selectSchedules } from '../../store/selectors/scheduler.selectors';
import { deleteSchedule, saveSchedule, updateSchedule } from 'src/app/store/actions/scheduler.actions';
// import { slideAnimation } from '../../animations/index';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.styl'],
  // animations: [slideAnimation]
})
export class ItemSelectorComponent implements OnInit {
  public schedule: Observable<fromSchedule.Schedule[]>;

  public checked = false;

  constructor(private store: Store<AppSate>) {
    this.schedule = this.store.select(selectSchedules);

    this.store.select(selectSchedules).subscribe(state => {
      console.log(state);
    });
  }

  ngOnInit(): void {
  }

  deleteSchedule(id: string) {
    this.store.dispatch(deleteSchedule({ id }));
  }

  checkedOnChange(checked: boolean, id: string) {
    this.store.dispatch(updateSchedule({ id, checked }));
  }

  logChange(event: string[]) {
    // console.log(event);
  }
}
