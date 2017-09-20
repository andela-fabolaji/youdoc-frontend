
          

import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../shared/TextBox';
import ButtonComponent from '../shared/Button';
import Loader from '../shared/Loader';
import './form.scss';

const SigninForm = ({ isLoading, values, handleChange, handleSubmit, switchForm, errors }) => {
  return (
    <div>
      <div className="form-header">
        <span className="title">Sign in</span>
        <span className="info">Don't have a Youdoc account? <span onClick={switchForm} className="signup-link">Sign up</span></span>
      </div>
      <TextBox
        id="email"
        type="text"
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        error={errors.email || ''}
      />
      <TextBox
        id="password"
        type="password"
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        error={errors.password || ''}
      />
      <ButtonComponent
        type="submit"
        onClick={handleSubmit}
        loading={isLoading}
      >
        {isLoading && <Loader/>}
        {!isLoading && 'Sign up'}
      </ButtonComponent>
    </div>
  );
};

SigninForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  switchForm: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default SigninForm;
