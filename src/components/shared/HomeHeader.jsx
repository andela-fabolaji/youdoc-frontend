import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './shared.scss';

const HomeHeader = (props) => {
  return(
    <div>
      <div className="header-line"></div>
      <div className="nav-wrapper">
        <div className="logo-holder">
          <Link to="/"><img className="logo" src={props.image}/></Link>
        </div>
        <div className="nav-holder">
          <nav>
            <Link to="/about" className="about-link">How it works</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

HomeHeader.propTypes = {
  image: PropTypes.string.isRequired
};

export default HomeHeader;