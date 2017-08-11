import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import {FormActions} from "./actions";
import {FormEpics} from "./epic";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent],
  providers: [FormActions, FormEpics],

})
export class FormModule { }
