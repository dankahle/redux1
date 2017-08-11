
import {ITutState, TUT_INITIAL_STATE} from "../tutorial/model";
import {EPIC_INITIAL_STATE, IEpicState} from "../epic/model";
import {FORM_INITIAL_STATE, IFormState} from "../form/model";

export interface IAppState {
  tutorial?: ITutState,
  epic?: IEpicState
  form?: IFormState
}

export const APP_INITIAL_STATE = {
  tutorial: TUT_INITIAL_STATE,
  epic: EPIC_INITIAL_STATE,
  form: FORM_INITIAL_STATE
}


