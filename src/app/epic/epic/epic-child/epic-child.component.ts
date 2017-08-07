import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import {IEpicState} from "../../reducer";
import {EpicActions} from "../../actions";
import {EpicData} from "../../epic-data.service";

@Component({
  selector: 'dk-epic-child',
  templateUrl: './epic-child.component.html',
  styleUrls: ['./epic-child.component.scss']
})
export class EpicChildComponent {
  @Input() data;

  constructor(protected epicActions:EpicActions) {
  }

}
