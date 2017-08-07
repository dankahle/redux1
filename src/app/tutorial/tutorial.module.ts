import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TutorialComponent} from "./tutorial/tutorial.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TutorialComponent],
  exports: [TutorialComponent]
})
export class TutorialModule { }
