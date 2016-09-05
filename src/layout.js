import React, { PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { Style } from 'jassy';

import HeaderLayout from './components/HeaderLayout';
import FooterLayout from './components/FooterLayout';
import GlobalState from './stores/Global.state';

class Layout extends React.Component {

  static displayName = 'Layout';

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired
  };

  getChildContext () {
    const context = this.props.context;

    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction
    };
  }

  render () {
    if (this.props.error) {
      return this.props.children;
    }
    else {
      return (
        <div className="main-container">
          <Style rules={GlobalState.styles} />
          <div className="main-container">
            <HeaderLayout />
            <div className="view-container">
              {this.props.children}
            </div>
            <FooterLayout />
          </div>
        </div>
      );
    }
  }

}

export default Layout;
