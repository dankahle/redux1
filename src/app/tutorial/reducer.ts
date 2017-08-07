
import {CounterActions} from "./actions";

export interface ITutState {
  count: number;
}

export const TUT_INITIAL_STATE:ITutState = {count: 0};

export function tutReducer(state:ITutState = TUT_INITIAL_STATE, action) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return {...state, count: state.count + 1}
    case CounterActions.DECREMENT:
      return {...state, count: state.count - 1}
  }
  return state;
}
