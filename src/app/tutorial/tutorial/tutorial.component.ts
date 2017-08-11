import { Component, OnInit } from '@angular/core';
import {CounterActions} from "../actions";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {IAppState} from "../../store/model";
import * as _ from 'lodash';

@Component({
  selector: 'dk-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

  @select(['tutorial', 'count']) readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>, private actions:CounterActions) {

    ngRedux.select('tutorial').subscribe(x => console.log('tutorial update', x));
    ngRedux.select('epic').subscribe(x => console.log('epic update in tutorial', x));
    ngRedux.subscribe(() => console.log('any update in tutorial'));
  }

  increment() {
    this.actions.increment();
  }

  decrement() {
    this.actions.decrement();
  }

}
