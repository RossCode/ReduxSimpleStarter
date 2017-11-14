import _ from 'lodash';
import { REGISTER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
