/**
 * Created by samhuber on 8/2/17.
 */
export default function(state = {}, action){
  switch (action.type){
    case 'LOAD_DRILL': {
      return action.payload;
    }
  }

  return state;
}
