import request from 'utils/request';
import {
  GET_ROLE_STEP,
} from './constants';

export function getFields(id) {
  const data = {
    method: 'GET',
    url: `${GET_ROLE_STEP}?id=${id}`,
  };
  return request(data);
}
