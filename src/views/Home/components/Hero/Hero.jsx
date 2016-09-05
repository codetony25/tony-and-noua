import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import HeroState from './Hero.state'
import flowerLeftImg from '../../assets/images/flower-left.png';
import flowerRightImg from '../../assets/images/flower-right.png';
import flowerDivider from '../../assets/images/flower-divider.png';

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
            <img src={flowerLeftImg} alt="" />
            <i className="fa fa-heart" />
            <img src={flowerRightImg} alt="" />
          </div>
          <div className="hero-date-wrapper">
            <img src={flowerDivider} alt="" />
            <div className="hero-date">
              <h4>We are getting married</h4>
              <h2>June 17, 2017</h2>
            </div>
            <img src={flowerDivider} alt="" />
          </div>
        </div>
      </Element>
    );
  }

}

export default Hero;
