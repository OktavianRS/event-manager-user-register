/**
*
* Header
*
*/

import React from 'react';
const htmlHeader = require(`static/${sessionStorage.getItem('nameOfEvent') || 'default'}/header.html`);
const template = { __html: htmlHeader };


function Header() {
  return (
    <div className="header-content">
      <div dangerouslySetInnerHTML={template} />
    </div>
  );
}

Header.propTypes = {

};

export default Header;
