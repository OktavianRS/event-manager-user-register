/*
 *
 * Register
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FormContainer from 'components/FormContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Styles from 'components/Styles';
import { makeSelectFields } from './selectors';
import { getFieldsFromServer } from './actions';

export class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getFromServer();
  }

  render() {
    return (
      <div>
        <Styles />
        <Header />
        <FormContainer fields={this.props.Fields} />
        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  getFromServer: React.PropTypes.func,
  Fields: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  Fields: makeSelectFields(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getFromServer: () => {
      dispatch(getFieldsFromServer());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
