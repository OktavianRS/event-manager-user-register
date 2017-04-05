/**
*
* FormContainer
*
*/

import React from 'react';
// import styled from 'styled-components';

import TextField from 'components/TextField';
import Button from 'components/Button';

class FormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps) {
    if (this.props.fields !== nextProps.fields) {
      return true;
    }
    return false;
  }

  inserter(value, key) {
    switch (value.type) {
      case 'input':
        return <TextField key={key} value={value} />;
      case 'submit':
        return <Button key={key} value={value} />;
      default:
        return null;
    }
  }

  render() {
    const { fields } = this.props;
    return (
      <div className="main-content">
        {fields.map(this.inserter)}
      </div>
    );
  }
}

FormContainer.propTypes = {
  fields: React.PropTypes.array,
};

export default FormContainer;
