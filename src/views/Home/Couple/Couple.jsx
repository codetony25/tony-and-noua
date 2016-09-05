import React from 'react';
import { Style } from 'jassy';

import CoupleState from './Couple.state'

import coupleFirstImg from '../assets/images/couple-first.png';
import coupleSecondImg from '../assets/images/couple-second.png';

class Couple extends React.Component {

  static displayName = 'Couple';

  render () {
    return(
      <div className="couple-container">
        <Style rules={CoupleState.styles} />
        <div className="couple-background" />
        <div className="couple-wrapper">
          <div className="couple-first">
            <div className="couple-description">
              <h3>Tony Nguyen</h3>
              <p>Lorem Ipsumimu is simply dummy text of the  pesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className="couple-first-image">
              <img src={coupleFirstImg} alt="" />
            </div>
          </div>
          <div className="couple-divider">
            <i className="fa fa-heart" />
          </div>
          <div className="couple-second">
            <div className="couple-second-image">
              <img src={coupleSecondImg} alt="" />
            </div>
            <div className="couple-description">
              <h3>Noua Vue</h3>
              <p>Lorem Ipsumimu is simply dummy text of the  pesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Couple;
