import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-scroll';
import { Style } from 'jassy';

import HeaderLayoutState from './HeaderLayout.state';

@observer
class HeaderLayout extends React.Component {

  static displayName = 'HeaderLayout';

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    HeaderLayoutState.attachWindow();
  }

  componentWillUnmount () {
    HeaderLayoutState.removeWindow();
  }

  render () {
    return(
      <div className="header-container">
        <Style rules={HeaderLayoutState.styles} />
        <nav>
          <div className="header-logo">
            <h3>Our Wedding Event</h3>
          </div>
          <ul className="header-navigation">
            <li>
              <Link to="home" smooth={true}>+ Home</Link>
            </li>
            <li>
              <Link to="couple" smooth={true}>+ Couple</Link>
            </li>
            <li>
              <Link to="location" smooth={true}>+ Location</Link>
            </li>
            <li>
              <Link to="rsvp" smooth={true}>+ RSVP</Link>
            </li>
          </ul>
          <div className="more-navigation">
            <a
              href="#"
              onClick={HeaderLayoutState.onMobileNavigationClick}
            >
              <i className="fa fa-bars" />
            </a>
          </div>
          <ul className="mobile-navigation">
            <li>
              <Link
                to="home"
                smooth={true}
                onClick={HeaderLayoutState.onMobileLinkClick}
              >
                + Home
              </Link>
            </li>
            <li>
              <Link
                to="couple"
                smooth={true}
                onClick={HeaderLayoutState.onMobileLinkClick}
              >
                + Couple
              </Link>
            </li>
            <li>
              <Link
                to="location"
                smooth={true}
                onClick={HeaderLayoutState.onMobileLinkClick}
              >
                + Location
              </Link>
            </li>
            <li>
              <Link
                to="location"
                smooth={true}
                offset={350}
                onClick={HeaderLayoutState.onMobileLinkClick}
              >
                + RSVP
              </Link>
            </li>
            <li
              className="mobile-overlay"
              onClick={HeaderLayoutState.onMobileOverlayClick}
            />
          </ul>
        </nav>
      </div>
    );
  }

}

export default HeaderLayout;
