import React from 'react';
import { Style } from 'jassy';
import { Element } from 'react-scroll';

import LocationState from './Location.state'
import TitleBlock from '../../../../components/TitleBlock';

class Location extends React.Component {

  static displayName = 'Location';

  render () {
    return(
      <Element name="location" className="location-container">
        <Style rules={LocationState.styles} />
        <TitleBlock
          section="Our Wedding Information"
          title="Wedding Event Location"
          description="Tony and Noua's Venue and Time"
        />
        <Element name="rsvp" className="location-wrapper">
          <div className="location-image">
            <img src='/assets/views/Home/tonyandnoua.png' alt=""/>
          </div>
          <div className="location-details">
            <h5>Join Us</h5>
            <h2>When and Where</h2>
            <p>The ceremony will be held on Saturday, June 17, 2017 at <br /><br /><strong>Yorba Linda Mansion - 4490 Ohio Street, Yorba Linda, CA 92886, United States</strong><br /><br /> It will start at <strong>Twelve O'Clock</strong> in the afternoon.</p>
            <p>A celebration with dinner and dancing will follow at the venue. Please RSVP with First and Last name by June 12. Click RSVP below if you plan on attending</p>
            <div className="location-summary">
              <div className="summary-first">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>June 17, 2017</p>
              </div>
              <div className="summary-second">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>Yorba Linda Mansion</p>
              </div>
              <div className="summary-fourth">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>12:00 PM</p>
              </div>
            </div>
            <div className="location-rsvp">
              <a href="mailto:nouavue@gmail.com?subject=Tony%20and%20Noua%20Wedding%20Reservation%20(RSVP)%20Request!&body=Please%20email%20us%20who%20is%20planning%20on%20attending%20Tony%20and%20Noua's%20wedding%20and%20if%20you%20are%20planning%20on%20bringing%20more%20guests%20(+1's)%20below%20(examples%20provided,%20please%20change%20names,%20guests,%20and%20notes.):%0D%0A%0D%0A%20Name:%0D%0A-%20John%20Smith%0D%0A%0D%0A%20More%20Guests:%0D%0A-%20Max%20Power%0D%0A-%20Britney%20Spears%0D%0A%0D%0AAdditional%20Notes:%0D%0A-%20Can't%20wait%20to%20see%20Tony%20and%20Noua%20get%20married%20on%20June%2017th!%20:)">
                <button className="btn btn-secondary btn-rounded">
                  RSVP
                </button>
              </a>
            </div>
          </div>
        </Element>
      </Element>
    );
  }

}

export default Location;
