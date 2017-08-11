


import {EpicActions} from "./actions"
import {Injectable} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {EPIC_INITIAL_STATE, IEpicState} from "./model";
import {IAppState} from "../store/model";

export function epicReducer(state:IEpicState = EPIC_INITIAL_STATE, action) {
  switch(action.type) {

    case EpicActions.FETCH_USER:
      return {...state, fetching:true, userName: action.payload.userName, data:undefined}
    case EpicActions.FETCH_USER_FULFILLED:
      return {...state, fetching:false, data: action.payload}
    default:
      return state;
  }
}

@Injectable()
export class EpicData {

  constructor(ngRedux:NgRedux<IAppState>) {
    ngRedux.select('epic')
  }
}


