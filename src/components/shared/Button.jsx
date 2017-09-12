import React from 'react';
import PropTypes from 'prop-types';

import './shared.scss';

const style = {
  loading: {
    background: '#82C9FF'
  }
};

const Button = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="btn signup-btn"
      disabled={props.loading}
      style={props.loading? style.loading: null}
      >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  loading: false
};

export default Button;
