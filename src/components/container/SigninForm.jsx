import React, { Component } from 'react';
import TextBox from '../shared/TextBox';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render () {
    return (
      <div>
        {/* <TextBox
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
        /> */}
      </div>
    );
  }
}

export default SigninForm;