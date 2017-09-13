import React from 'react';

import SigninForm from '../../container/SigninForm';
import SignupForm from '../../container/signup/SignupForm';

import './formcomponent.scss';

class FormComponent extends React.Component {
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

  render () {
    const signinForm = <SigninForm switchForm={this.switchForm}/>;
    const signupForm = <SignupForm switchForm={this.switchForm}/>;

    let currentForm = this.state.showSignIn ? signinForm: signupForm;

    return (
      <div className="form-component">{currentForm}</div>
    );
  }
}

export default FormComponent;
