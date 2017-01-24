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
            <p>The ceremony will be held on Saturday, June 17, 2017 at <strong>Luxory Manor - 20711 East Mesarica Road, Covina, CA 91724</strong>. It will start at Twelve O'Clock in the afternoon.</p>
            <p>A celebration with dinner and dancing will follow at the venue. Please RSVP with First and Last name by May 30.</p>
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
                <p>Luxory Manor</p>
              </div>
              <div className="summary-fourth">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>12:00 PM</p>
              </div>
            </div>
            <div className="location-rsvp">
              <a
                href="mailto:codetony25@gmail.com"
              >
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
