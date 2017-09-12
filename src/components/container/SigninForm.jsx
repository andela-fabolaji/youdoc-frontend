import React from 'react';
import PropTypes from 'prop-types';

import TextBox from '../shared/TextBox';
import Button from '../shared/Button';
import Loader from '../shared/Loader';

import { SigninProps } from '../../utils/formInput';
import './form.scss';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdentity: '',
      password: '',
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.user = {};
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    const { signinInputFields, submitButtonProps } = SigninProps(this);
    const isLoading = this.state.loading;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <div className="form-header">
            <span className="title">Sign in</span>
            <span className="info">Don't have a Youdoc account? <span onClick={this.props.switchForm} className="signup-link">Sign up</span></span>
          </div>
          {signinInputFields.map(inputProps => <TextBox key={inputProps.name} {...inputProps} />)}
          <Button {...submitButtonProps} loading={isLoading}>
            {isLoading && <Loader/>}
            {!isLoading && 'Sign in'}
          </Button>
        </div>
      </form>
    );
  }
}

SigninForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default SigninForm;
