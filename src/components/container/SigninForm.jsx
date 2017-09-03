import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../shared/TextBox';
import Button from '../shared/Button';
import './form.scss';

class SigninForm extends React.Component {
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
          <span className="title">Sign in</span>
          <span className="info">Don't have a Youdoc account? <span onClick={this.props.switchForm} className="signup-link">Sign up</span></span>
        </div>
         <TextBox
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          label="Username"
        />
        <TextBox
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          label="Password"
        />
        <Button onClick={this.props.submitForm} label="Sign in"/> 
      </div>
    );
  }
}

SigninForm.propTypes = {
  switchForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SigninForm;