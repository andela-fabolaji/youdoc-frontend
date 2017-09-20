import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../shared/TextBox';
import ButtonComponent from '../shared/Button';
import Loader from '../shared/Loader';
import './form.scss';

const SignupForm = ({ isLoading, values, handleChange, handleSubmit, switchForm, errors }) => {
  return (
    <div>
      <div className="form-header">
        <span className="title">Sign up</span>
        <span className="info">I have an account <span onClick={switchForm} className="signup-link">Sign in</span></span>
      </div>
      <TextBox
        id="firstName"
        type="text"
        name="firstName"
        label="First Name"
        value={values.firstName}
        onChange={handleChange}
        error={errors.firstName || ''}
      />
      <TextBox
        id="lastName"
        type="text"
        name="lastName"
        label="Last Name"
        value={values.lastName}
        onChange={handleChange}
        error={errors.lastName  || ''}
      />
      <TextBox
        id="username"
        type="text"
        name="username"
        label="Username"
        value={values.username}
        onChange={handleChange}
        error={errors.username  || ''}
      />
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

SignupForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  switchForm: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignupForm;
