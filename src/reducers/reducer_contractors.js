import _ from 'lodash';
import { GET_CONTRACTORS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CONTRACTORS:
      return { ...state, contractors: action.payload.data };
    default:
      return state;
  }
}