import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TextBox from '../shared/TextBox';
import Button from '../shared/Button';

import { SigninProps } from '../../utils/form-input';
import './form.scss';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.baseUrl = 'https://youdoc.herokuapp.com/users/login'
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    const data = {
      userIdentity: this.state.username,
      password: this.state.password
    };
    axios.post(this.baseUrl, data)
      .then(res => console.log(res));
  }

  render () {
    const { signinInputFields, submitButtonProps } = SigninProps(this);

    return (
      <form onSubmit={this.onSubmit}>
        <div>  
          <div className="form-header">
            <span className="title">Sign in</span>
            <span className="info">Don't have a Youdoc account? <span onClick={this.props.switchForm} className="signup-link">Sign up</span></span>
          </div>
          {signinInputFields.map(inputProps => <TextBox key={inputProps.name} {...inputProps} />)}
          <Button {...submitButtonProps} />
        </div>
      </form>
    );
  }
}

SigninForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default SigninForm;