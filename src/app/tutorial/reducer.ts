
import {CounterActions} from "./actions";
import {ITutState, TUT_INITIAL_STATE} from "./model";

export function tutReducer(state:ITutState = TUT_INITIAL_STATE, action) {
  switch(action.type) {
    case CounterActions.INCREMENT:
      return {...state, count: state.count + 1}
    case CounterActions.DECREMENT:
      return {...state, count: state.count - 1}
  }
  return state;
}
