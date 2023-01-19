import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/store';
import { saveSchedule } from 'src/app/store/actions/scheduler.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.styl']
})
export class InputSelectorComponent implements OnInit {
  value: string = ''

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
  }

  inputKeydown (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.scheduleSave()
    }
  }

  scheduleSave () {
    if (!this.value) return
    const schedule = {
      title: this.value,
      id: uuidv4(),
      status: false,
      checked: false
    }
    this.value = ''
    this.store.dispatch(saveSchedule({ schedule }))
  }
}
