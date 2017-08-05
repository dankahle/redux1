
import {Action} from "redux";
import {CounterActions} from "./actions";

export interface IAppState {
  count: number;
}

export const INITIAL_STATE:IAppState = {count: 0};

export function rootReducer(state:IAppState, action:Action) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return {...state, count: state.count + 1}
    case CounterActions.INCREMENT:
      return {...state, count: state.count - 1}
  }
  return state;
}
