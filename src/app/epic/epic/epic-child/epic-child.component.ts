import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";

@Component({
  selector: 'dk-epic-child',
  templateUrl: './epic-child.component.html',
  styleUrls: ['./epic-child.component.scss']
})
export class EpicChildComponent implements OnInit {
  @select(['epic', 'data', 'login']) login$: Observable<string>;
  @select(['epic', 'data', 'id']) id$: Observable<string>;


  constructor() { }

  ngOnInit() {
  }

}
