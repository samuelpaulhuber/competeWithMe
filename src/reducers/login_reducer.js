import {LOGIN, ERROR} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  var t = {isAuthenticated: true};
  switch (action.type){
    case(LOGIN):
      console.log('reducer_login_error');
      if(action.payload && action.payload.data){
        localStorage.setItem('CompeteWithMeToken', JSON.stringify(action.payload.data));
        return t;
      }
    case(ERROR):
      console.log('reducer_error');
      window.location.replace("http://localhost:9000/error");
    default:
      return state;
  }
}
