import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TextBox from '../shared/TextBox';
import Button from '../shared/Button';

import { SignupProps } from '../../utils/form-input';
import './form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      roleId: ''
    };
  }

  render () {
    const { signupInputFields, submitButtonProps } = SignupProps(this);

    return (
      <div>  
        <div className="form-header">
          <span className="title">Sign up</span>
          <span className="info">I have an account <span onClick={this.props.switchForm} className="signup-link">Sign in</span></span>
        </div>
        {signupInputFields.map(inputProps => <TextBox key={inputProps.name} {...inputProps} />)}
        <Button {...submitButtonProps} />
      </div>
    );
  }
}

SignupForm.propTypes = {
  switchForm: PropTypes.func.isRequired
  // submitForm: PropTypes.func.isRequired,
};

export default SignupForm;