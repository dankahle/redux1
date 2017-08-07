import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EpicChildComponent} from "./epic/epic-child/epic-child.component";
import {EpicComponent} from "./epic/epic.component";
import {EpicData} from "./epic-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    EpicComponent, EpicChildComponent],
  exports: [    EpicComponent, EpicChildComponent],
  providers: [EpicData]
})
export class EpicModule { }
