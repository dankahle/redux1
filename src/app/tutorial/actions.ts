
import {Injectable} from "@angular/core";

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  increment () {
    return {type: CounterActions.INCREMENT};
  }

  decrement () {
    return {type: CounterActions.DECREMENT};
  }

}
