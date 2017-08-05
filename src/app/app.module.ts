import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { logger } from 'redux-logger';
import {IAppState, INITIAL_STATE, rootReducer} from "./tutorial/reducer";
import {CounterActions} from "./tutorial/actions";
import { TutorialComponent } from './tutorial/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      []; // <- New

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
  }
}
