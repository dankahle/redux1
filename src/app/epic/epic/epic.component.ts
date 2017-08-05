import { Component, OnInit } from '@angular/core';
import {EpicActions} from "../actions";
import {NgRedux, select} from "@angular-redux/store";
import {IEpicAppState} from "../reducer";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent {

  @select() readonly data$: Observable<object>;
  @select() readonly fetching$: Observable<boolean>;

  constructor(protected epicActions:EpicActions, protected ngRedux: NgRedux<IEpicAppState>) {}



}
