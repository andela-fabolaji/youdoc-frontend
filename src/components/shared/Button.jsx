import React from 'react';
import PropTypes from 'prop-types';

import './shared.scss';

const Button = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="btn signup-btn">
      {props.label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;