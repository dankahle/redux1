


import {EpicActions} from "./actions"

export interface IEpicAppState {
  userName?: string,
  fetching?: boolean,
  data?: object
  fetchedUser?: string
};

export const EPIC_INITIAL_STATE = {fetching: false};

export function epicReducer(state:IEpicAppState, action) {
  switch(action.type) {

    case EpicActions.FETCH_USER:
      return {...state, fetching:true, userName: action.payload.userName, data:undefined}
    case EpicActions.FETCH_USER_FULFILLED:
      return {...state, fetching:false, data: action.payload}
    default:
      return state;
  }
}


