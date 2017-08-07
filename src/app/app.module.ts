import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { logger } from 'redux-logger';
import {ITutState, TUT_INITIAL_STATE, tutReducer} from "./tutorial/reducer";
import {CounterActions} from "./tutorial/actions";
import { TutorialComponent } from './tutorial/tutorial/tutorial.component';
import { EpicComponent } from './epic/epic/epic.component';
import {EpicActions} from "./epic/actions";
import {EPIC_INITIAL_STATE, epicReducer, IEpicState} from "./epic/reducer";
import {EpicEpics} from "./epic/epics";
import {createEpicMiddleware} from "redux-observable";
import {Http, HttpModule} from "@angular/http";
import { EpicChildComponent } from './epic/epic/epic-child/epic-child.component';
import {combineReducers, Reducer} from "redux";
import {TutorialModule} from "./tutorial/tutorial.module";
import {EpicModule} from "./epic/epic.module";

export interface IAppState {
  tutorial?: ITutState,
  epic?: IEpicState
}

const rootReducer:Reducer<IAppState> = combineReducers({
  tutorial: tutReducer,
  epic: epicReducer
})

const initialState = {
  tutorial: TUT_INITIAL_STATE,
  epic: EPIC_INITIAL_STATE
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    EpicModule,
    TutorialModule
  ],
  providers: [CounterActions, EpicActions, EpicEpics],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    epicEpics: EpicEpics) {

    const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      []; // <- New

    var middleware = createEpicMiddleware(epicEpics.getEpics());
    ngRedux.configureStore(rootReducer, initialState, [middleware], storeEnhancers);
  }


}
