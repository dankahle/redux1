import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TutorialComponent} from "./tutorial/tutorial.component";
import {CounterActions} from "./actions";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TutorialComponent],
  exports: [TutorialComponent],
  providers: [CounterActions]
})
export class TutorialModule { }
