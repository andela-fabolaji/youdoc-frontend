import React, { Component } from 'react';
import HomeHeader from '../../../shared/HomeHeader';
import logo from '../../../../../public/assets/logo.png';
import SigninForm from '../../../container/SigninForm';

import './HomeLayout.scss';

class HomeLayout extends Component {
  render () {
    return (
      <div>
        <HomeHeader image={logo}/>
        <div className="main">
          <div className="left-layout">left</div>
          <div className="right-layout">right</div>
        </div>
      </div>
    );
  }
}

export default HomeLayout;