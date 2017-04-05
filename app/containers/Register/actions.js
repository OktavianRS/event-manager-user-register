/*
 *
 * Register actions
 *
 */

import {
  GET_FIELDS_FROM_SERVER,
  FIELDS_LOADED,
  FAILED_LODING_FIELDS,
  NOTIFY_WAS_SHOWN,
} from './constants';

export function getFieldsFromServer() {
  return {
    type: GET_FIELDS_FROM_SERVER,
  };
}

export function fieldsLoaded(data) {
  return {
    type: FIELDS_LOADED,
    data,
  };
}

export function failedLoadingFields(data) {
  return {
    type: FAILED_LODING_FIELDS,
    data,
  };
}

export function notifyShown() {
  return {
    type: NOTIFY_WAS_SHOWN,
  };
}
