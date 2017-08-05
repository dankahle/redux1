import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { logger } from 'redux-logger';
import {IAppState, INITIAL_STATE, rootReducer} from "./tutorial/reducer";
import {CounterActions} from "./tutorial/actions";
import { TutorialComponent } from './tutorial/tutorial/tutorial.component';
import { EpicComponent } from './epic/epic/epic.component';
import {EpicActions} from "./epic/actions";
import {EPIC_INITIAL_STATE, epicReducer, IEpicAppState} from "./epic/reducer";
import {EpicEpics} from "./epic/epics";
import {createEpicMiddleware} from "redux-observable";
import {Http, HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    EpicComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule
  ],
  providers: [CounterActions, EpicActions, EpicEpics],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IEpicAppState>,
    devTools: DevToolsExtension,
    epicEpics: EpicEpics) {

    const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      []; // <- New

    var middleware = createEpicMiddleware(epicEpics.getEpics());
    ngRedux.configureStore(epicReducer, EPIC_INITIAL_STATE, [middleware], storeEnhancers);
  }
}
