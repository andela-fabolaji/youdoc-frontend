import React from 'react';
import PropTypes from 'prop-types';

import './shared.scss';

const style = {
  loading: {
    background: '#82C9FF'
  }
};

const ButtonComponent = ({ type, onClick, loading, children }) => (
  <button
    type={type}
    onClick={onClick}
    className="btn signup-btn"
    disabled={loading}
    style={loading? style.loading: null}
    >
    {children}
  </button>
);

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

ButtonComponent.defaultProps = {
  loading: false
};

export default ButtonComponent;
