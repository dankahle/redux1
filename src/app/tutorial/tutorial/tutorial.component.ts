import { Component, OnInit } from '@angular/core';
import {CounterActions} from "../actions";
import {IAppState} from "../../app.module";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

  @select(['tutorial', 'count']) readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>, private actions:CounterActions) {
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

}
