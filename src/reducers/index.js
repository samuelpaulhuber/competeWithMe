import { combineReducers } from 'redux';
import LoadDataReducer from './load_reducer';
import DrillsReducer from './drills_reducer';
import LoginReducer from './login_reducer';

import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  loadData: LoadDataReducer,
  drillData: DrillsReducer,
  form: formReducer,
  loginData: LoginReducer
});

export default rootReducer;
