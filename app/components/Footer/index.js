/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';
const htmlHeader = require(`static/${sessionStorage.getItem('nameOfEvent') || 'default'}/footer.html`);
const template = { __html: htmlHeader };


function Footer() {
  return (
    <div className="footer-content">
      <div dangerouslySetInnerHTML={template} />
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
