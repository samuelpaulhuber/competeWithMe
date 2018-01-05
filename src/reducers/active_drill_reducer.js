/**
 * Created by samhuber on 12/9/17.
 */
import {DRILL_SELECTED} from '../actions';
import {REMOVE_ACTIVE_DRILL} from '../actions';
export default function(state = null, action) {
  switch(action.type){
    case DRILL_SELECTED:
      return action.payload;
    case REMOVE_ACTIVE_DRILL:
      console.log('REDUCER');
      return null;
  }

  return state;
}