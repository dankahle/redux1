import { Injectable } from '@angular/core';
import {ITutState} from "./reducer";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../app.module";

@Injectable()
export class TutData {
  x: ITutState;

  constructor(ngRedux:NgRedux<IAppState>) {
    ngRedux.select<ITutState>('tutorial')
      .subscribe(tutorial => {
        console.log('tut state update');
        this.x = tutorial;
      });
  }


}
