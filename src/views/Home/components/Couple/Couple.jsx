import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';
import { observer } from 'mobx-react';

import CoupleState from './Couple.state'

import coupleFirstImg from '../../assets/images/couple-first.png';
import coupleSecondImg from '../../assets/images/couple-second.png';

@observer
class Couple extends React.Component {

  static displayName = 'Couple';

  render () {
    return(
      <Element name="couple" className="couple-container">
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
              <p>Lorem Ipsuimu is simply dummy text of the  pesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
          </div>
        </div>
        <div className="couple-countdown">
          <div className="countdown-box">
            <h3>{CoupleState.days}</h3>
            <p>Days</p>
          </div>
          <div className="countdown-box">
            <h3>{CoupleState.hours}</h3>
            <p>Hours</p>
          </div>
          <div className="countdown-box">
            <h3>{CoupleState.minutes}</h3>
            <p>Minutes</p>
          </div>
          <div className="countdown-box">
            <h3>{CoupleState.seconds}</h3>
            <p>Seconds</p>
          </div>
        </div>
        <div className="couple-rsvp">
          <button className="btn btn-primary btn-rounded">Save The Date</button>
        </div>
      </Element>
    );
  }

}

export default Couple;
