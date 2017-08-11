import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgReduxModule} from '@angular-redux/store';
import { logger } from 'redux-logger';
import {HttpModule} from "@angular/http";
import {TutorialModule} from "./tutorial/tutorial.module";
import {EpicModule} from "./epic/epic.module";
import {FormModule} from "./form/form.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {StoreModule} from "./store/store.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgReduxModule,
    HttpModule,
    StoreModule,
    EpicModule,
    TutorialModule,
    FormModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
