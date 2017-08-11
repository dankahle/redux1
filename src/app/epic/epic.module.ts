import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EpicChildComponent} from "./epic/epic-child/epic-child.component";
import {EpicComponent} from "./epic/epic.component";
import {EpicEpics} from "./epics";
import {EpicActions} from "./actions";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    EpicComponent, EpicChildComponent],
  exports: [    EpicComponent, EpicChildComponent],
  providers: [EpicActions, EpicEpics],
})
export class EpicModule { }
