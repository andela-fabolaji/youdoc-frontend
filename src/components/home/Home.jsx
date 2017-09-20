import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/authThunks';

import HomeHeader from '../shared/HomeHeader';
import SigninForm from '../auth/SigninForm';
import SignupForm from '../auth/SignupForm';
import validate from '../../utils/validate.js';

import logo from '../../../public/assets/logo.png';
import shield from '../../../public/assets/shield.svg';
import dumbbell from '../../../public/assets/dumbbell.svg';
import rocket from '../../../public/assets/rocket-ship.svg';

import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true,
      isLoading: false,
      formDetails: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
    this.switchForm = this.switchForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  switchForm (e) {
    e.preventDefault();
    this.setState({
      showSignIn: !this.state.showSignIn,
      errors: {}
    });
  }

  handleChange(e) {
    this.setState({
      formDetails: Object.assign({}, this.state.formDetails, {
        [e.target.name]: e.target.value
      })
    });
  }

  validateform(formDetails) {
    let isValid = true;
    let errors = validate(formDetails);

    if (Object.keys(errors).length) {
      this.setState({ errors });
      isValid = false;
    }

    return isValid;
  }

  toggleLoading(state) {
    this.setState({ isLoading: state });
  }

  signin(event) {
    event.preventDefault();
    const formDetails = {
      email: this.state.formDetails.email,
      password: this.state.formDetails.password
    };

    if (!this.validateform(formDetails)) return;
    
    this.toggleLoading(true);

    this.props.signIn(formDetails)
      .then(res => {
        this.toggleLoading(false);
        console.log(res);
      });
  }

  signup(event) {
    event.preventDefault();
    
   if (this.validateform(this.state.formDetails)) {
      return;
    }
  }

  render () {
    const handleSubmit = this.state.showSignIn ? this.signin: this.signup;
    const formProps = {
      values: this.state.formDetails,
      isLoading: this.state.isLoading,
      handleChange: this.handleChange,
      handleSubmit: handleSubmit,
      switchForm: this.switchForm,
      errors: this.state.errors
    };

    return (
      <div>
        <HomeHeader image={logo}/>
        <div className="main">
          <div className="left-layout">
            <div className="intro">
              <h1>Youdoc</h1>
              <div className="divider"/>
              <div className="pitch-text">
                Youdoc is a modern, opensource, lightweight Manager for your documents. It’s a smart system that offers a ton of  functionalities outside the box. With Zap, you have full control over your documents.
              </div>
              <div className="icons">
                <ul>
                  <li><div><img src={rocket} /></div>Fast</li>
                  <li><div><img src={dumbbell} /></div>Powerful</li>
                  <li><div><img src={shield} /></div>secure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-layout">
            {
              this.state.showSignIn &&
              <div className="form-component">{<SigninForm {...formProps}/>}</div>
            }
            {
              !this.state.showSignIn &&
              <div className="form-component">{<SignupForm {...formProps}/>}</div>
            } 
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
