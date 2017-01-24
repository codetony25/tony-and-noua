import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';
import { observer } from 'mobx-react';

import CoupleState from './Couple.state'

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
              <p>You are the reason why I work hard everyday. Cannot wait to grow very old with you.</p>
            </div>
            <div className="couple-first-image">
              <img src='/assets/views/Home/couple-first.png' alt="" />
            </div>
          </div>
          <div className="couple-divider">
            <i className="fa fa-heart" />
          </div>
          <div className="couple-second">
            <div className="couple-second-image">
              <img src='/assets/views/Home/couple-second.png' alt="" />
            </div>
            <div className="couple-description">
              <h3>Noua Vue</h3>
              <p>My love for you will forever grow and never get old. I am definately one of the luckiest souls on Earth to be marrying you.</p>
            </div>
          </div>
        </div>
        <div className="couple-rsvp">
          <a href="http://add.eventable.com/events/58871ae8e25dee001a6ab3b4/58871aeae1989d0016055ae2/" className="eventable-link" target="_blank" data-key="58871ae8e25dee001a6ab3b4" data-event="58871aeae1989d0016055ae2" data-style="1">
            <button className="btn btn-primary btn-rounded">
              Save The Date
            </button>
          </a>
        </div>
      </Element>
    );
  }

}

export default Couple;
