/**
*
* Styles
*
*/

import React from 'react';
// import styled from 'styled-components';
import(`static/${sessionStorage.getItem('nameOfEvent') || 'default'}/style.css`);


function Styles() {
  return (
    <div>
    </div>
  );
}

Styles.propTypes = {

};

export default Styles;
