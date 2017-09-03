import React, { Component } from 'react';
import SigninForm from '../../container/SigninForm';
import SignupForm from '../../container/SignupForm';

import './FormComponent.scss';

class FormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true
    };
    this.switchForm = this.switchForm.bind(this);
  }

  switchForm () {
    this.setState({ showSignIn: !this.state.showSignIn });
  }

  submitForm() {  
    console.log('submitted');
  }

  render () {
    const signinForm = <SigninForm switchForm={this.switchForm} submitForm={this.submitForm}/>;
    const signupForm = <SignupForm switchForm={this.switchForm} submitForm={this.submitForm}/>;

    let currentForm = this.state.showSignIn ? signinForm: signupForm;

    return (
      <div className="form-component">{currentForm}</div>
    );
  }
}

export default FormComponent;