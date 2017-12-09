/**
 * Created by samhuber on 12/9/17.
 */
import {DRILL_SELECTED} from '../actions';
export default function(state = null, action) {
  switch(action.type){
    case DRILL_SELECTED:
      // console.log('**');
      // console.log(action.payload);
      // console.log('**');
      return action.payload;
  }

  return state;
}