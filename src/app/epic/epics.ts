

import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";
import {EpicActions} from "./actions";
import {Http} from "@angular/http";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class EpicEpics {

    constructor(private http:Http, private epicActions:EpicActions) {

    }

    getEpics() {
      return combineEpics(
        this.fetchUserEpic()
      )
    }

  fetchUserEpic() {
    return action$ => {
      return action$.ofType(EpicActions.FETCH_USER)
        .delay(1000)
        .mergeMap(action => {
          return this.http.get(`https://api.github.com/users/${action.payload.userName}`);
        })
        .map(response => this.epicActions.fetchUserFulfilled(response));
    }

  }

}
