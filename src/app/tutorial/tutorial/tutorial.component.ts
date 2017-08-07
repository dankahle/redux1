import { Component, OnInit } from '@angular/core';
import {CounterActions} from "../actions";
import {IAppState} from "../../app.module";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {TutData} from "../tutorial-data.service";

@Component({
  selector: 'dk-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

  constructor(private actions:CounterActions, public td:TutData) {
  }

  increment() {
    this.actions.increment();
  }

  decrement() {
    this.actions.decrement();
  }

}
