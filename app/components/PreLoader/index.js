/**
*
* PreLoader
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
// import styled from 'styled-components';
import loader from 'img/gear.svg';

const styles = {
  loader: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 999,
    width: '100%',
    height: '100%',
    overflow: 'visible',
    background: `#333 url(${loader}) no-repeat center center`,
  },
};

setTimeout(() => {
  sessionStorage.setItem('nameOfEvent', 'nameofevent');
  browserHistory.push('/register');
}, 3000);

function PreLoader() {
  return (
    <div style={styles.loader}>
    </div>
  );
}

PreLoader.propTypes = {

};

export default PreLoader;
