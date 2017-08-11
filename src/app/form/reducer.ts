

import {FORM_INITIAL_STATE, IFormState} from "./model";
import {FormActions} from "./actions";

export function formReducer(state:IFormState = FORM_INITIAL_STATE, action) {
  switch(action.type) {
    case FormActions.SUBMIT_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state
  }
}
