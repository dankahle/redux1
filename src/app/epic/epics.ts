

import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";
import {Http} from "@angular/http";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {EpicActions} from "./actions";

@Injectable()
export class EpicEpics {

    constructor(private http:Http, private epicActions:EpicActions) {

    }

    getEpics() {
      return combineEpics(
        this.fetchGithubDataEpic()
      )
    }

  fetchGithubDataEpic() {
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
