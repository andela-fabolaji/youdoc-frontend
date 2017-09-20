import React from 'react';
import PropTypes from 'prop-types';

import './shared.scss';

const TextBox = ({ type, label, id, name, value, onChange, error }) => { 
  return (
    <div className="form-control">
       <div className="label"><label htmlFor={id}>{label}</label></div>  
       <input
        type={type}
        id={id}
        name={name}
        className="tbox"
        value={value}
        onChange={onChange}
      /> 
      {error && <div style={{ color: 'red', fontSize: '0.7rem' }}>{error}</div>} 
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default TextBox;