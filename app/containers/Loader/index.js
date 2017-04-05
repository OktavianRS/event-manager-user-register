/*
 *
 * Loader
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PreLoader from 'components/PreLoader';
import { createStructuredSelector } from 'reselect';
import makeSelectLoader from './selectors';

export class Loader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PreLoader />
      </div>
    );
  }
}

Loader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Loader: makeSelectLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
