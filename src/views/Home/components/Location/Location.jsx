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
          description="Lorem ipsum dolor sit amet, cons tricies vestibulum vebibendum et condime ectetur adipisc elit. Proin ultricies vestibulum vebibendum et condim"
        />
        <Element name="rsvp" className="location-wrapper">
          <div className="location-image">
            <img src='/assets/views/Home/tonyandnoua.png' alt=""/>
          </div>
          <div className="location-details">
            <h5>Come Join Us</h5>
            <h2>Where and When</h2>
            <p>The ceremony will be held on Saturday, January 12, 2015 at Manalia Tower Floor 24 Room 256, Anfix Street ST01. It will start at Five O'Clock in the evenings.</p>
            <p>A celebration with dinner and dancing will follow at Forine Restaurant, Rose Street ST08. Check the map.</p>
            <div className="location-summary">
              <div className="summary-first">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>January 12, 2015</p>
              </div>
              <div className="summary-second">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>Floor 24, Room 256</p>
              </div>
              <div className="summary-third">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>Manalia Tower</p>
              </div>
              <div className="summary-fourth">
                <div className="summary-icon">
                  <i className="fa fa-paper-plane" />
                </div>
                <p>Anfix Street STO1</p>
              </div>
            </div>
            <div className="location-rsvp">
              <button className="btn btn-secondary btn-rounded">RSVP</button>
            </div>
          </div>
        </Element>
      </Element>
    );
  }

}

export default Location;
