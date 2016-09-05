import 'babel-polyfill';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import UniversalRouter from 'universal-router';
import routes from './routes';
import history from './core/history';
import { readState, saveState } from 'history/lib/DOMStateStorage';
import {
  addEventListener,
  removeEventListener,
  windowScrollX,
  windowScrollY
} from './core/DOMUtils';

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(style =>
      style._insertCss()); // eslint-disable-line no-underscore-dangle

    return () => {
      removeCss.forEach(callback => callback());
    };
  },
  setTitle: value => document.title = value,
  setMeta: (name, content) => {

    /**
     * Remove and create a new <meta /> tag in order to make it work
     * with bookmarks in Safari
     */
    const elements = document.getElementsByTagName('meta');
    const meta = document.createElement('meta');

    Array.from(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });

    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document
      .getElementsByTagName('head')[0]
      .appendChild(meta);
  }
};

// Restore the scroll position if it was saved into the state
const restoreScrollPosition = (state) => {
  if (state && state.scrollY !== null) {
    window.scrollTo(state.scrollX, state.scrollY);
  }
  else {
    window.scrollTo(0, 0);
  }
};

let renderComplete = (state, callback) => {
  const element = document.getElementById('css');

  if (element) {
    element.parentNode.removeChild(element);
  }

  callback(true);
  renderComplete = (restoreState) => {
    restoreScrollPosition(restoreState);

    /**
     * Google Analytics tracking. Don't send 'pageview' event after
     * the initial rendering, as it was already sent
     */
    if (window.ga) {
      window.ga('send', 'pageview');
    }

    callback(true);
  };
};

const render = (container, state, component) => {
  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(
        component,
        container,
        renderComplete.bind(null, state, resolve)
      );
    }
    catch (error) {
      reject(error);
    }
  });
};

const run = () => {
  const container = document.getElementById('app');
  let currentLocation = history.getCurrentLocation();

  // Make taps on links and buttons work fast on mobiles
  FastClick.attach(document.body);

  // Re-render the app when window.location changes
  function onLocationChange (location) {
    // Save the page scroll position into the current location's state
    if (currentLocation.key) {
      saveState(currentLocation.key, {
        ...readState(currentLocation.key),
        scrollX: windowScrollX(),
        scrollY: windowScrollY()
      });
    }
    currentLocation = location;

    UniversalRouter.resolve(routes, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context,
      render: render.bind(null, container, location.state) // eslint-disable-line react/jsx-no-bind, max-len
    }).catch(err => console.error(err));
  }

  // Add History API listener and trigger initial change
  const removeHistoryListener = history.listen(onLocationChange);
  history.replace(currentLocation);

  // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  let originalScrollRestoration;
  if (window.history && 'scrollRestoration' in window.history) {
    originalScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
  }

  // Prevent listeners collisions during history navigation
  addEventListener(window, 'pagehide', function onPageHide () {
    removeEventListener(window, 'pagehide', onPageHide);
    removeHistoryListener();
    if (originalScrollRestoration) {
      window.history.scrollRestoration = originalScrollRestoration;
      originalScrollRestoration = null;
    }
  });
};

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) &&
  document.body) {
  run();
}
else {
  document.addEventListener('DOMContentLoaded', run, false);
}
