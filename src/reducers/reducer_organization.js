import _ from 'lodash';
import { GET_ORGANIZATION, UPDATE_ORGANIZATION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ORGANIZATION:
      return { ...state, ...action.payload.data };
    case UPDATE_ORGANIZATION:
      return { ...state, ...action.payload.data }
    default:
      return state;
  }
}
