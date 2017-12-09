/**
 * Created by samhuber on 8/2/17.
 */
export default function(state = {}, action){
  switch (action.type){
    case 'LOAD_DRILLS': {
      const test =  _.mapKeys(action.payload.data, 'id');
      return test;
    }
  }

  return state;
}
