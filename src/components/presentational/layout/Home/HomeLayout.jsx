import React, { Component } from 'react';
import HomeHeader from '../../../shared/HomeHeader';
import FormComponent from '../../form/FormComponent';
import logo from '../../../../../public/assets/logo.png';
import shield from '../../../../../public/assets/shield.svg';
import dumbbell from '../../../../../public/assets/dumbbell.svg';
import rocket from '../../../../../public/assets/rocket-ship.svg';

import './HomeLayout.scss';

class HomeLayout extends Component {
  render () {
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
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLayout;