import { Component, OnInit } from '@angular/core';
import {EpicActions} from "../actions";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../app.module";
import {Observable} from "rxjs/Observable";
import {EpicData} from "../epic-data.service";
import {IEpicState} from "../reducer";

@Component({
  selector: 'dk-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent {

  constructor(protected epicActions:EpicActions, public ed:EpicData) {
  }

  fetchUser(name:string) {
    this.epicActions.fetchUser(name);
  }


}
