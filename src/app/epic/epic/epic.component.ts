import { Component, OnInit } from '@angular/core';
import {EpicActions} from "../actions";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../app.module";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent {

  @select(['epic', 'data']) readonly data$: Observable<object>;
  @select(['epic', 'fetching']) readonly fetching$: Observable<boolean>;

  constructor(protected epicActions:EpicActions, protected ngRedux: NgRedux<IAppState>) {}

  fetchUser(name:string) {
    this.epicActions.fetchUser(name);
  }


}
