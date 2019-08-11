import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => (
  // eslint-disable-next-line react/destructuring-assignment
  props.isLoading ? (
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  ) : (
    false
  )
  )

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
