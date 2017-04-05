/**
*
* TextField
*
*/

import React from 'react';
// import styled from 'styled-components';


class TextField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { config, props } = this.props.value;
    return (
      <div>
        <label htmlFor={props.name}>{props.title}</label>
        <input
          type={config.type}
          required={config.required}
          name={props.name}
          ref={props.name}
          placeholder={props.helpText}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  value: React.PropTypes.shape({
    props: React.PropTypes.shape({
      title: React.PropTypes.string,
      helpText: React.PropTypes.string,
      name: React.PropTypes.string,
    }),
    config: React.PropTypes.shape({
      required: React.PropTypes.bool,
      type: React.PropTypes.string,
    }),
  }),
};

export default TextField;
