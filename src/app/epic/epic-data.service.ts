import { Injectable } from '@angular/core';
import {IEpicState} from "./reducer";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../app.module";

@Injectable()
export class EpicData {
  x: IEpicState;

  constructor(ngRedux:NgRedux<IAppState>) {
    ngRedux.select<IEpicState>('epic')
      .subscribe(epic => {
        console.log('epic state update');
        this.x = epic;
      });
  }


}
