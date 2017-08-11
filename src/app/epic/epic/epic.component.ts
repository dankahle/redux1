import { Component, OnInit } from '@angular/core';
import {EpicActions} from "../actions";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {IAppState} from "../../store/model";

@Component({
  selector: 'dk-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent {

  @select(['epic', 'data']) readonly data$: Observable<object>;
  @select(['epic', 'fetching']) readonly fetching$: Observable<boolean>;

  constructor(protected epicActions:EpicActions, protected ngRedux: NgRedux<IAppState>) {
    ngRedux.select('epic').subscribe(x => console.log('epic update', x));
  }

  fetchUser(name:string) {
    this.epicActions.fetchUser(name);
  }


}
