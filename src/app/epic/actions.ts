

import {Injectable} from "@angular/core";

@Injectable()
export class EpicActions {
  static FETCH_USER = 'FETCH_USER';
  static FETCHING_USER = 'FETCHING_USER';
  static FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

  fetchUser(userName) {
    return {type:EpicActions.FETCH_USER, payload: {userName}};
  }

  fetchUserFulfilled(payload) {
    return { type: EpicActions.FETCH_USER_FULFILLED, payload: payload.json()};
  }

}

