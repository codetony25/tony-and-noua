import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import HeroState from './Hero.state'

class Hero extends React.Component {

  static displayName = 'Hero';

  render () {
    return(
      <Element name="home" className="hero-container">
        <Style rules={HeroState.styles} />
        <div className="hero-overlay" />
        <div className="hero-main">
          <div className="hero-title">
            <h1>Tony <span>&</span> Noua</h1>
          </div>
          <div className="hero-divider">
            <img src='/assets/views/Home/flower-left.png' alt="" />
            <i className="fa fa-heart" />
            <img src='/assets/views/Home/flower-right.png' alt="" />
          </div>
          <div className="hero-date-wrapper">
            <img src='/assets/views/Home/flower-divider.png' alt="" />
            <div className="hero-date">
              <h4>We are getting married</h4>
              <h2>June 17, 2017</h2>
            </div>
            <img src='/assets/views/Home/flower-divider.png' alt="" />
          </div>
        </div>
      </Element>
    );
  }

}

export default Hero;
