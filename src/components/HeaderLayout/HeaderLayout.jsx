import React from 'react';
import { observer } from 'mobx-react';
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
              <a href="#">+ Home</a>
            </li>
            <li>
              <a href="#">+ Location</a>
            </li>
            <li>
              <a href="#">+ Our Story</a>
            </li>
            <li>
              <a href="#">+ Gallery</a>
            </li>
            <li>
              <a href="#">+ Schedule</a>
            </li>
            <li>
              <a href="#">+ RSVP</a>
            </li>
          </ul>
          <div className="more-navigation">
            <a href="#">
              <i className="fa fa-bars" />
            </a>
          </div>
        </nav>
      </div>
    );
  }

}

export default HeaderLayout;
