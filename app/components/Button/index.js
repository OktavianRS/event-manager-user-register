/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';


class Button extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { config, props, text } = this.props.value;
    return (
      <div>
        <label htmlFor={props.name}>{props.title}</label>
        <span>{props.helpText}</span>
        <button
          type={config.type}
          required={config.required}
          name={props.name}
          ref={props.name}
        >{text}</button>
      </div>
    );
  }
}

Button.propTypes = {
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
    text: React.PropTypes.string,
  }),
};

export default Button;
