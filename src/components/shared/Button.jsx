import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './shared.scss';


const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="btn signup-btn">
      {props.label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;