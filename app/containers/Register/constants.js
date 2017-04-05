import { DOMAIN } from 'containers/App/constants';
/*
 *
 * Register constants
 *
 */
 // url configs
export const BASE_URL = `${DOMAIN}/event/api/web/v1`;

export const GET_ROLE_STEP = `${BASE_URL}/step/get-role-step`;

export const GET_FIELDS_FROM_SERVER = 'app/Register/GET_FIELDS_FROM_SERVER';
export const FIELDS_LOADED = 'app/Register/FIELDS_LOADED';
export const FAILED_LODING_FIELDS = 'app/Register/FAILED_LODING_FIELDS';
export const NOTIFY_WAS_SHOWN = 'app/Register/NOTIFY_WAS_SHOWN';
