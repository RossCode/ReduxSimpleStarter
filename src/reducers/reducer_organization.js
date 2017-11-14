import _ from 'lodash';
import { GET_ORGANIZATION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ORGANIZATION:
      return { ...state, organization: action.payload.data };
    default:
      return state;
  }
}
