


import {EpicActions} from "./actions"
import {Injectable} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../app.module";

export interface IEpicState {
  userName?: string,
  fetching?: boolean,
  data?: object
  fetchedUser?: string
};

export const EPIC_INITIAL_STATE = {
  fetching: false
};

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



