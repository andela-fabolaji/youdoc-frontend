import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.scss';

const TextBox = (props) => { 
  return (
    <div>
      <div><label htmlFor={props.id}>{props.label}</label></div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        className="tbox"
      />
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextBox;