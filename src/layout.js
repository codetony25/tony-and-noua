import React, { Component, PropTypes } from 'react';
import { Style } from 'jassy';
import emptyFunction from 'fbjs/lib/emptyFunction';
import initalCss from './styles/vendors/Inital.css';

// Layouts
import HeaderLayout from './components/HeaderLayout';
import FooterLayout from './components/FooterLayout';

// Global State
import GlobalState from './stores/Global.state';

class Layout extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(initalCss);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Style rules={GlobalState.styles} />
        <div className="main-container">
          <HeaderLayout />
          <div className="view-container">
            {this.props.children}
          </div>
          <FooterLayout />
        </div>
      </div>
    ) : this.props.children;
  }

}

export default Layout;
