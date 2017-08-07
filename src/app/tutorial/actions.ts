
import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  @dispatch()
  increment () {
    return {type: CounterActions.INCREMENT};
  }

  @dispatch()
  decrement () {
    return {type: CounterActions.DECREMENT};
  }

}
