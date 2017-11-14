import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './reducer_user';
import organization from './reducer_organization';
import contractors from './reducer_contractors';

const rootReducer = combineReducers({
  user,
  organization,
  contractors,
  form
});

export default rootReducer;
