import { Component, OnInit } from '@angular/core';
import {FormActions} from "../actions";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";

@Component({
  selector: 'dk-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @select(['form', 'id']) id$: Observable<number>;

  constructor(private formActions:FormActions) {
  }

  submit(e) {
    e.preventDefault();
    this.formActions.submit();
  }
}
