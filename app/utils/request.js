import axios from 'axios';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  console.log('-----------------------------');// eslint-disable-line
  console.info(`Request url: ${options.url}`);// eslint-disable-line
  console.log('-----------------------------');// eslint-disable-line
  return axios(options);
}
