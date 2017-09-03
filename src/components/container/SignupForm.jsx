import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../shared/TextBox';
import Button from '../shared/Button';
import './form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render () {
    return (
      <div>  
        <div className="form-header">
          <span className="title">Sign up</span>
          <span className="info">I have an account <span onClick={this.props.switchForm} className="signup-link">Sign in</span></span>
        </div>
         <TextBox
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          label="First name"
        />
        <TextBox
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          label="Last name"
        />
        <TextBox
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          label="Email"
        />
        <TextBox
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          label="username"
        />
        <TextBox
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          label="Password"
        />
        <Button onClick={this.props.submitForm} label="Sign up"/> 
      </div>
    );
  }
}

SignupForm.propTypes = {
  switchForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignupForm;