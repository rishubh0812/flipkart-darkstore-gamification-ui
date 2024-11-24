import { combineReducers } from 'redux';
import userReducer from './userReducer';
import toastReducer from './toastReducer';
import competitionReducer from './competitionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
  competition: competitionReducer,
});

export default rootReducer;
