// this function searching url params
// $params {string} name of param

/* eslint-disable */

export function getUrlParam(name) {
  if (name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
    return decodeURIComponent(name[1]);
  }
}

export default getUrlParam

/* eslint-enable */
