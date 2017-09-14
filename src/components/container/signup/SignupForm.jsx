import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from '../../../thunks/userDispatcher';

import TextBox from '../../shared/TextBox';
import Button from '../../shared/Button';
import Loader from '../../shared/Loader';

import { SignupProps } from '../../../utils/formInput';
import '../form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        firstName: 'femi',
        lastName: 'abolaji',
        email: 'femi.systems@gmail.com',
        username: 'femipixels',
        password: 'password',
        roleId: 5
      },
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    // console.log(event.target.name, event.target.value);
    event.persist();
    this.setState({
      userDetails: Object.assign({}, this.state.userDetails, {
        [event.target.name]: event.target.value
      }),
      loading: false
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.signupUser(this.state.userDetails);
  }

  render () {
    const { signupInputFields, submitButtonProps } = SignupProps(this);
    const isLoading = this.state.isLoading;

    return (
      <div>
        <div className="form-header">
          <span className="title">Sign up</span>
          <span className="info">I have an account <span onClick={this.props.switchForm} className="signup-link">Sign in</span></span>
        </div>
        {signupInputFields.map(inputProps => <TextBox key={inputProps.name} {...inputProps} />)}
        {this.props.user.error || null}
        <Button {...submitButtonProps} loading={isLoading}>
          {isLoading && <Loader/>}
          {!isLoading && 'Sign up'}
        </Button>
      </div>
    );
  }
}

SignupForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUser: userDetails => dispatch(signupUser(userDetails))
  };
};

// const mapDispatchToProps = {
//   signupUser
// };

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
