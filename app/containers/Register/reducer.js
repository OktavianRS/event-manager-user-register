/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_FIELDS_FROM_SERVER,
  FIELDS_LOADED,
  FAILED_LODING_FIELDS,
  NOTIFY_WAS_SHOWN,
} from './constants';

const initialState = fromJS({
  fields: [],
  errors: {
    show: false,
    message: false,
    status: false,
  },
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FIELDS_FROM_SERVER:
      return state;
    case FIELDS_LOADED:
      return state
        .set('fields', fromJS(action.data.items));
    case FAILED_LODING_FIELDS:
      return state
        .setIn(['errors', 'show'], true)
        .setIn(['errors', 'message'], action.data.message)
        .setIn(['errors', 'status'], action.data.status);
    case NOTIFY_WAS_SHOWN:
      return state
        .setIn(['errors', 'show'], false)
        .setIn(['errors', 'message'], false)
        .setIn(['errors', 'status'], false);
    default:
      return state;
  }
}

export default registerReducer;
