import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TutorialComponent} from "./tutorial/tutorial.component";
import {TutData} from "./tutorial-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TutorialComponent],
  exports: [TutorialComponent],
  providers: [TutData]
})
export class TutorialModule { }
