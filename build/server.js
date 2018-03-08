require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(3);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  __webpack_require__(6);
  
  var _path = __webpack_require__(7);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(8);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(9);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(10);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(11);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _expressGraphql = __webpack_require__(12);
  
  var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
  
  var _jsonwebtoken = __webpack_require__(13);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(15);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(16);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(17);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _config = __webpack_require__(18);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = __webpack_require__(21);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _passport = __webpack_require__(29);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _models = __webpack_require__(32);
  
  var _models2 = _interopRequireDefault(_models);
  
  var _schema = __webpack_require__(39);
  
  var _schema2 = _interopRequireDefault(_schema);
  
  var _routes = __webpack_require__(53);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(114);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var app = (0, _express2.default)(); // eslint-disable-line import/no-unresolved
  
  var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
  });
  
  var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
  });
  
  var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  });
  
  var _ref5 = (0, _jsx3.default)('meta', {
    name: 'theme-color',
    content: '#ffffff'
  });
  
  var _ref6 = (0, _jsx3.default)('link', {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/assets/favicons/apple-touch-icon.png'
  });
  
  var _ref7 = (0, _jsx3.default)('link', {
    rel: 'icon',
    type: 'image/png',
    href: '/assets/favicons/favicon-32x32.png',
    sizes: '32x32'
  });
  
  var _ref8 = (0, _jsx3.default)('link', {
    rel: 'icon',
    type: 'image/png',
    href: '/assets/favicons/favicon-16x16.png',
    sizes: '16x16'
  });
  
  var _ref9 = (0, _jsx3.default)('link', {
    rel: 'manifest',
    href: '/assets/favicons/manifest.json'
  });
  
  var _ref10 = (0, _jsx3.default)('link', {
    rel: 'mask-icon',
    href: '/assets/favicons/safari-pinned-tab.svg',
    color: '#5bbad5'
  });
  
  var _ref11 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/assets/css/fontawesome.css'
  });
  
  var _ref12 = (0, _jsx3.default)('link', {
    rel: 'stylesheet',
    href: '/assets/css/linearicons.css'
  });
  
  var _ref13 = (0, _jsx3.default)('link', {
    href: '//fonts.googleapis.com/css?family=Dancing+Script:400,700|Droid+Serif:400,700|Roboto:400,700',
    rel: 'stylesheet'
  });
  
  var _ref14 = (0, _jsx3.default)('script', {
    src: 'https://www.google-analytics.com/analytics.js',
    async: true,
    defer: true
  });
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        children = _ref.children;
  
    return (0, _jsx3.default)('html', {
      className: 'no-js',
      lang: 'en'
    }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref2, _ref3, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
      name: 'description',
      content: description
    }), _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, (0, _jsx3.default)('style', {
      id: 'css',
      dangerouslySetInnerHTML: { __html: style }
    })), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
      id: 'app',
      dangerouslySetInnerHTML: { __html: children }
    }), script && (0, _jsx3.default)('script', {
      src: script
    }), _config.analytics.google.trackingId && (0, _jsx3.default)('script', {
      dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\'https://plugins.eventable.com/eventable.js\';fjs.parentNode.insertBefore(js,fjs);}}(document,\'script\', \'eventable-script\');') }
    }), _config.analytics.google.trackingId && _ref14));
  }
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  app.use(_passport2.default.initialize());
  
  app.get('/login/facebook', _passport2.default.authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
  app.get('/login/facebook/return', _passport2.default.authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
    var expiresIn = 60 * 60 * 24 * 180; // 180 days
    var token = _jsonwebtoken2.default.sign(req.user, _config.auth.jwt.secret, { expiresIn: expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  });
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
      schema: _schema2.default,
      graphiql: true,
      rootValue: { request: req },
      pretty: ("production") !== 'production'
    };
  }));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var css, statusCode, data, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              css = new _set2.default();
              statusCode = 200;
              data = {
                title: 'Tony and Noua\'s Wedding Event',
                description: 'RSVP to join our wedding event with Tony and Noua!',
                style: '',
                script: _assets2.default.main.js,
                children: ''
              };
              _context.next = 6;
              return _universalRouter2.default.resolve(_routes2.default, {
                path: req.path,
                query: req.query,
                context: {
                  insertCss: function insertCss() {
                    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                      styles[_key] = arguments[_key];
                    }
  
                    styles.forEach(function (style) {
                      return css.add(style._getCss());
                    }); // eslint-disable-line no-underscore-dangle, max-len
                  },
                  setTitle: function setTitle(value) {
                    return data.title = value;
                  },
                  setMeta: function setMeta(key, value) {
                    return data[key] = value;
                  }
                },
                render: function render(component) {
                  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                  css = new _set2.default();
                  statusCode = status;
                  data.children = _server2.default.renderToString(component);
                  data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                  return true;
                }
              });
  
            case 6:
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(Html, data));
  
  
              res.status(statusCode);
              res.send('<!doctype html>' + html);
              _context.next = 14;
              break;
  
            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);
  
              next(_context.t0);
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref15.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup((0, _jsx3.default)(Html, {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss()
    }, void 0, _server2.default.renderToString((0, _jsx3.default)(_ErrorPage.ErrorPageWithoutStyle, {
      error: err
    }))));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  _models2.default.sync().catch(function (err) {
    return console.error(err.stack);
  }).then(function () {
    app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
    });
  });
  /* eslint-enable no-console */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

  module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

  module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

  module.exports = require("cookie-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

  module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

  module.exports = require("express-jwt");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

  module.exports = require("express-graphql");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

  module.exports = require("react");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

  module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

  module.exports = require("universal-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

  module.exports = require("pretty-error");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var port = exports.port = process.env.PORT || 2000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
    }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'Codetony Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(20);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(21);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (false) {
      errorMessage = (0, _jsx3.default)('pre', {}, void 0, error.stack);
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h1', {}, void 0, title), (0, _jsx3.default)('p', {}, void 0, content), errorMessage);
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(22);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;margin:2em auto}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(25);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(26);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(27);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(28);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _passport = __webpack_require__(30);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _passportFacebook = __webpack_require__(31);
  
  var _models = __webpack_require__(32);
  
  var _config = __webpack_require__(18);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Sign in with Facebook.
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /**
   * Passport.js reference implementation.
   * The database schema used in this sample is available at
   * https://github.com/membership/membership.db/tree/master/postgres
   */
  
  _passport2.default.use(new _passportFacebook.Strategy({
    clientID: _config.auth.facebook.id,
    clientSecret: _config.auth.facebook.secret,
    callbackURL: '/login/facebook/return',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, function (req, accessToken, refreshToken, profile, done) {
    /* eslint-disable no-underscore-dangle */
    var loginName = 'facebook';
    var claimType = 'urn:facebook:access_token';
    var fooBar = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var userLogin, user, users, _user;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.user) {
                  _context.next = 14;
                  break;
                }
  
                _context.next = 3;
                return _models.UserLogin.findOne({
                  attributes: ['name', 'key'],
                  where: { name: loginName, key: profile.id }
                });
  
              case 3:
                userLogin = _context.sent;
  
                if (!userLogin) {
                  _context.next = 8;
                  break;
                }
  
                // There is already a Facebook account that belongs to you.
                // Sign in with that account or delete it, then link it with your current account.
                done();
                _context.next = 12;
                break;
  
              case 8:
                _context.next = 10;
                return _models.User.create({
                  id: req.user.id,
                  email: profile._json.email,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: profile.id }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 10:
                user = _context.sent;
  
                done(null, {
                  id: user.id,
                  email: user.email
                });
  
              case 12:
                _context.next = 32;
                break;
  
              case 14:
                _context.next = 16;
                return _models.User.findAll({
                  attributes: ['id', 'email'],
                  where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                  include: [{
                    attributes: ['name', 'key'],
                    model: _models.UserLogin,
                    as: 'logins',
                    required: true
                  }]
                });
  
              case 16:
                users = _context.sent;
  
                if (!users.length) {
                  _context.next = 21;
                  break;
                }
  
                done(null, users[0]);
                _context.next = 32;
                break;
  
              case 21:
                _context.next = 23;
                return _models.User.findOne({ where: { email: profile._json.email } });
  
              case 23:
                _user = _context.sent;
  
                if (!_user) {
                  _context.next = 28;
                  break;
                }
  
                // There is already an account using this email address. Sign in to
                // that account and link it with Facebook manually from Account Settings.
                done(null);
                _context.next = 32;
                break;
  
              case 28:
                _context.next = 30;
                return _models.User.create({
                  email: profile._json.email,
                  emailVerified: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                  }
                }, {
                  include: [{ model: _models.UserLogin, as: 'logins' }, { model: _models.UserClaim, as: 'claims' }, { model: _models.UserProfile, as: 'profile' }]
                });
  
              case 30:
                _user = _context.sent;
  
                done(null, {
                  id: _user.id,
                  email: _user.email
                });
  
              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));
  
      return function fooBar() {
        return _ref.apply(this, arguments);
      };
    }();
  
    fooBar().catch(done);
  }));
  
  exports.default = _passport2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

  module.exports = require("passport");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

  module.exports = require("passport-facebook");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserProfile = exports.UserClaim = exports.UserLogin = exports.User = undefined;
  
  var _sequelize = __webpack_require__(33);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _User = __webpack_require__(35);
  
  var _User2 = _interopRequireDefault(_User);
  
  var _UserLogin = __webpack_require__(36);
  
  var _UserLogin2 = _interopRequireDefault(_UserLogin);
  
  var _UserClaim = __webpack_require__(37);
  
  var _UserClaim2 = _interopRequireDefault(_UserClaim);
  
  var _UserProfile = __webpack_require__(38);
  
  var _UserProfile2 = _interopRequireDefault(_UserProfile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _User2.default.hasMany(_UserLogin2.default, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  _User2.default.hasMany(_UserClaim2.default, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  _User2.default.hasOne(_UserProfile2.default, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade'
  });
  
  function sync() {
    return _sequelize2.default.sync.apply(_sequelize2.default, arguments);
  }
  
  exports.default = { sync: sync };
  exports.User = _User2.default;
  exports.UserLogin = _UserLogin2.default;
  exports.UserClaim = _UserClaim2.default;
  exports.UserProfile = _UserProfile2.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _config = __webpack_require__(18);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var sequelize = new _sequelize2.default(_config.databaseUrl, {
    define: {
      freezeTableName: true
    }
  });
  
  exports.default = sequelize;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

  module.exports = require("sequelize");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var User = _sequelize4.default.define('User', {
  
    id: {
      type: _sequelize2.default.UUID,
      defaultValue: _sequelize2.default.UUIDV1,
      primaryKey: true
    },
  
    email: {
      type: _sequelize2.default.STRING(255),
      validate: { isEmail: true }
    },
  
    emailConfirmed: {
      type: _sequelize2.default.BOOLEAN,
      defaultValue: false
    }
  
  }, {
  
    indexes: [{ fields: ['email'] }]
  
  });
  
  exports.default = User;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserLogin = _sequelize4.default.define('UserLogin', {
  
    name: {
      type: _sequelize2.default.STRING(50),
      primaryKey: true
    },
  
    key: {
      type: _sequelize2.default.STRING(100),
      primaryKey: true
    }
  
  });
  
  exports.default = UserLogin;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var UserClaim = _sequelize4.default.define('UserClaim', {
  
    type: {
      type: _sequelize2.default.STRING
    },
  
    value: {
      type: _sequelize2.default.STRING
    }
  
  });
  
  exports.default = UserClaim;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _sequelize = __webpack_require__(34);
  
  var _sequelize2 = _interopRequireDefault(_sequelize);
  
  var _sequelize3 = __webpack_require__(33);
  
  var _sequelize4 = _interopRequireDefault(_sequelize3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var UserProfile = _sequelize4.default.define('UserProfile', {
  
    userId: {
      type: _sequelize2.default.UUID,
      primaryKey: true
    },
  
    displayName: {
      type: _sequelize2.default.STRING(100)
    },
  
    picture: {
      type: _sequelize2.default.STRING(255)
    },
  
    gender: {
      type: _sequelize2.default.STRING(50)
    },
  
    location: {
      type: _sequelize2.default.STRING(100)
    },
  
    website: {
      type: _sequelize2.default.STRING(255)
    }
  
  });
  
  exports.default = UserProfile;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var _me = __webpack_require__(41);
  
  var _me2 = _interopRequireDefault(_me);
  
  var _content = __webpack_require__(43);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _news = __webpack_require__(49);
  
  var _news2 = _interopRequireDefault(_news);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        me: _me2.default,
        content: _content2.default,
        news: _news2.default
      }
    })
  });
  
  exports.default = schema;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

  module.exports = require("graphql");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _UserType = __webpack_require__(42);
  
  var _UserType2 = _interopRequireDefault(_UserType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var me = {
    type: _UserType2.default,
    resolve: function resolve(_ref) {
      var request = _ref.request;
  
      return request.user && {
        id: request.user.id,
        email: request.user.email
      };
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = me;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
      email: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = UserType;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(28);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(25);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var resolveExtension = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(path, extension) {
      var fileNameBase, ext, fileName;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileNameBase = (0, _path.join)(CONTENT_DIR, '' + (path === '/' ? '/index' : path));
              ext = extension;
  
              if (!ext.startsWith('.')) {
                ext = '.' + extension;
              }
  
              fileName = fileNameBase + ext;
              _context.next = 6;
              return fileExists(fileName);
  
            case 6:
              if (_context.sent) {
                _context.next = 9;
                break;
              }
  
              fileNameBase = (0, _path.join)(CONTENT_DIR, path + '/index');
              fileName = fileNameBase + ext;
  
            case 9:
              _context.next = 11;
              return fileExists(fileName);
  
            case 11:
              if (_context.sent) {
                _context.next = 13;
                break;
              }
  
              return _context.abrupt('return', { success: false });
  
            case 13:
              return _context.abrupt('return', { success: true, fileName: fileName });
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function resolveExtension(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var resolveFileName = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(path) {
      var extensions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, extension, maybeFileName;
  
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensions = ['.md', '.html'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 4;
              _iterator = (0, _getIterator3.default)(extensions);
  
            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 16;
                break;
              }
  
              extension = _step.value;
              _context2.next = 10;
              return resolveExtension(path, extension);
  
            case 10:
              maybeFileName = _context2.sent;
  
              if (!maybeFileName.success) {
                _context2.next = 13;
                break;
              }
  
              return _context2.abrupt('return', { success: true, fileName: maybeFileName.fileName, extension: extension });
  
            case 13:
              _iteratorNormalCompletion = true;
              _context2.next = 6;
              break;
  
            case 16:
              _context2.next = 22;
              break;
  
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
  
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
  
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
  
            case 25:
              _context2.prev = 25;
  
              if (!_didIteratorError) {
                _context2.next = 28;
                break;
              }
  
              throw _iteratorError;
  
            case 28:
              return _context2.finish(25);
  
            case 29:
              return _context2.finish(22);
  
            case 30:
              return _context2.abrupt('return', { success: false, fileName: null, extension: null });
  
            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));
  
    return function resolveFileName(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  
  var _fs = __webpack_require__(44);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(7);
  
  var _bluebird = __webpack_require__(45);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _frontMatter = __webpack_require__(46);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _markdownIt = __webpack_require__(47);
  
  var _markdownIt2 = _interopRequireDefault(_markdownIt);
  
  var _graphql = __webpack_require__(40);
  
  var _ContentType = __webpack_require__(48);
  
  var _ContentType2 = _interopRequireDefault(_ContentType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var md = new _markdownIt2.default();
  
  // A folder with Markdown/HTML content pages
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseContent = function parseContent(path, fileContent, extension) {
    var fmContent = (0, _frontMatter2.default)(fileContent);
    var htmlContent = void 0;
    switch (extension) {
      case '.md':
        htmlContent = md.render(fmContent.body);
        break;
      case '.html':
        htmlContent = fmContent.body;
        break;
      default:
        return null;
    }
    return (0, _assign2.default)({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2.default.promisify(_fs2.default.readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2.default(function (resolve) {
      _fs2.default.exists(filename, resolve);
    });
  };
  
  var content = {
    type: _ContentType2.default,
    args: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(_ref3, _ref4) {
      var _this = this;
  
      var request = _ref3.request;
      var path = _ref4.path;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _ref5, success, fileName, extension, source;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return resolveFileName(path);
  
              case 2:
                _ref5 = _context3.sent;
                success = _ref5.success;
                fileName = _ref5.fileName;
                extension = _ref5.extension;
  
                if (success) {
                  _context3.next = 8;
                  break;
                }
  
                return _context3.abrupt('return', null);
  
              case 8:
                _context3.next = 10;
                return readFile(fileName, { encoding: 'utf8' });
  
              case 10:
                source = _context3.sent;
                return _context3.abrupt('return', parseContent(path, source, extension));
  
              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      }))();
    }
  };
  
  exports.default = content;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

  module.exports = require("fs");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

  module.exports = require("bluebird");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

  module.exports = require("front-matter");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

  module.exports = require("markdown-it");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var ContentType = new _graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
      path: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      component: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = ContentType;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var _fetch = __webpack_require__(50);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _NewsItemType = __webpack_require__(52);
  
  var _NewsItemType2 = _interopRequireDefault(_NewsItemType);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // React.js News Feed (RSS)
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load' + '?v=1.0&num=10&q=https://reactjsnews.com/feed.xml'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */
  
  var items = [];
  var lastFetchTask = void 0;
  var lastFetchTime = new Date(1970, 0, 1);
  
  var news = {
    type: new _graphql.GraphQLList(_NewsItemType2.default),
    resolve: function resolve() {
      if (lastFetchTask) {
        return lastFetchTask;
      }
  
      if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
          lastFetchTime = new Date();
          lastFetchTask = (0, _fetch2.default)(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.responseStatus === 200) {
              items = data.responseData.feed.entries;
            }
  
            return items;
          }).finally(function () {
            lastFetchTask = null;
          });
  
          if (items.length) {
            return items;
          }
  
          return lastFetchTask;
        }
  
      return items;
    }
  };
  
  exports.default = news;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(45);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(51);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(18);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

  module.exports = require("node-fetch");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _graphql = __webpack_require__(40);
  
  var NewsItemType = new _graphql.GraphQLObjectType({
    name: 'NewsItem',
    fields: {
      title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      link: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      author: { type: _graphql.GraphQLString },
      publishedDate: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      contentSnippet: { type: _graphql.GraphQLString }
    }
  }); /**
       * React Starter Kit (https://www.reactstarterkit.com/)
       *
       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.txt file in the root directory of this source tree.
       */
  
  exports.default = NewsItemType;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _layout = __webpack_require__(54);
  
  var _layout2 = _interopRequireDefault(_layout);
  
  var _Home = __webpack_require__(89);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _error = __webpack_require__(113);
  
  var _error2 = _interopRequireDefault(_error);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  exports.default = {
  
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_Home2.default,
  
    // place new routes before...
    _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render((0, _jsx3.default)(_layout2.default, {
                  context: context
                }, void 0, component)));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  // Layouts
  
  
  // Global State
  
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _MuiThemeProvider = __webpack_require__(61);
  
  var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
  
  var _emptyFunction = __webpack_require__(62);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _Inital = __webpack_require__(63);
  
  var _Inital2 = _interopRequireDefault(_Inital);
  
  var _HeaderLayout = __webpack_require__(65);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);
  
  var _FooterLayout = __webpack_require__(78);
  
  var _FooterLayout2 = _interopRequireDefault(_FooterLayout);
  
  var _Global = __webpack_require__(82);
  
  var _Global2 = _interopRequireDefault(_Global);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_HeaderLayout2.default, {});
  
  var _ref2 = (0, _jsx3.default)(_FooterLayout2.default, {});
  
  var Layout = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);
  
    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Layout, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_Inital2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        return !this.props.error ? (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _Global2.default.styles
        }), (0, _jsx3.default)(_MuiThemeProvider2.default, {}, void 0, (0, _jsx3.default)('div', {
          className: 'main-container'
        }, void 0, _ref, (0, _jsx3.default)('div', {
          className: 'view-container'
        }, void 0, this.props.children), _ref2))) : this.props.children;
      }
    }]);
    return Layout;
  }(_react.Component), _class.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  }, _temp);
  exports.default = Layout;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

  module.exports = require("jassy");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

  module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(64);
      var insertCss = __webpack_require__(24);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(23)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);
  
  // exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _HeaderLayout = __webpack_require__(66);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _HeaderLayout2.default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _class2, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _mobxReact = __webpack_require__(67);
  
  var _reactScroll = __webpack_require__(68);
  
  var _jassy = __webpack_require__(60);
  
  var _HeaderLayout = __webpack_require__(69);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'header-logo'
  }, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Our Wedding Event'));
  
  var _ref2 = (0, _jsx3.default)('ul', {
    className: 'header-navigation'
  }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
    to: 'home',
    smooth: true
  }, void 0, '+ Home')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
    to: 'couple',
    smooth: true
  }, void 0, '+ Couple')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
    to: 'location',
    smooth: true
  }, void 0, '+ Location')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
    to: 'rsvp',
    smooth: true
  }, void 0, '+ RSVP')));
  
  var _ref3 = (0, _jsx3.default)('i', {
    className: 'fa fa-bars'
  });
  
  var HeaderLayout = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
    (0, _inherits3.default)(HeaderLayout, _React$Component);
  
    function HeaderLayout(props) {
      (0, _classCallCheck3.default)(this, HeaderLayout);
      return (0, _possibleConstructorReturn3.default)(this, (HeaderLayout.__proto__ || (0, _getPrototypeOf2.default)(HeaderLayout)).call(this, props));
    }
  
    (0, _createClass3.default)(HeaderLayout, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        _HeaderLayout2.default.attachWindow();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _HeaderLayout2.default.removeWindow();
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: 'header-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _HeaderLayout2.default.styles
        }), (0, _jsx3.default)('nav', {}, void 0, _ref, _ref2, (0, _jsx3.default)('div', {
          className: 'more-navigation'
        }, void 0, (0, _jsx3.default)('a', {
          href: '#',
          onClick: _HeaderLayout2.default.onMobileNavigationClick
        }, void 0, _ref3)), (0, _jsx3.default)('ul', {
          className: 'mobile-navigation'
        }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
          to: 'home',
          smooth: true,
          onClick: _HeaderLayout2.default.onMobileLinkClick
        }, void 0, '+ Home')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
          to: 'couple',
          smooth: true,
          onClick: _HeaderLayout2.default.onMobileLinkClick
        }, void 0, '+ Couple')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
          to: 'location',
          smooth: true,
          onClick: _HeaderLayout2.default.onMobileLinkClick
        }, void 0, '+ Location')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactScroll.Link, {
          to: 'location',
          smooth: true,
          offset: 350,
          onClick: _HeaderLayout2.default.onMobileLinkClick
        }, void 0, '+ RSVP')), (0, _jsx3.default)('li', {
          className: 'mobile-overlay',
          onClick: _HeaderLayout2.default.onMobileOverlayClick
        }))));
      }
    }]);
    return HeaderLayout;
  }(_react2.default.Component), _class2.displayName = 'HeaderLayout', _temp)) || _class;
  
  exports.default = HeaderLayout;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

  module.exports = require("mobx-react");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

  module.exports = require("react-scroll");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _HeaderLayout = __webpack_require__(72);
  
  var _HeaderLayout2 = _interopRequireDefault(_HeaderLayout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var HeaderLayoutState = (_class = function HeaderLayoutState() {
    var _this = this;
  
    (0, _classCallCheck3.default)(this, HeaderLayoutState);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  
    this.attachWindow = function () {
      window.addEventListener('scroll', _this.handleScroll);
    };
  
    this.removeWindow = function () {
      window.removeEventListener('scroll', _this.handleScroll);
    };
  
    this.handleScroll = function () {
      if (window.scrollY > _this.minScrollHeight) {
        _this.styles = (0, _HeaderLayout2.default)({
          isScrollHeightReached: true,
          isMobileNavigationTapped: false
        });
      } else if (window.scrollY < _this.minScrollHeight) {
        _this.styles = (0, _HeaderLayout2.default)({
          isScrollHeightReached: false,
          isMobileNavigationTapped: false
        });
      }
    };
  
    this.onMobileNavigationClick = function (event) {
      event.preventDefault();
  
      _this.handleToggleMobileNavigation();
    };
  
    this.onMobileLinkClick = function (event) {
      event.preventDefault();
  
      _this.handleToggleMobileNavigation();
    };
  
    this.onMobileOverlayClick = function (event) {
      event.preventDefault();
  
      _this.handleToggleMobileNavigation();
    };
  
    this.handleToggleMobileNavigation = function () {
      _this.isMobileNavigationShown = !_this.isMobileNavigationShown;
      _this.styles = (0, _HeaderLayout2.default)({
        isScrollHeightReached: false,
        isMobileNavigationTapped: _this.isMobileNavigationShown
      });
    };
  
    this.minScrollHeight = 76;
    this.isMobileNavigationShown = false;
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _HeaderLayout2.default)({
        isScrollHeightReached: false,
        isMobileNavigationTapped: false
      });
    }
  })), _class);
  exports.default = new HeaderLayoutState();

/***/ }),
/* 70 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

  module.exports = require("mobx");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _Scheme = __webpack_require__(74);
  
  var _Variables = __webpack_require__(75);
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HeaderLayoutStyle = function HeaderLayoutStyle(options) {
    var _headerNavigation, _mobileNavigation, _nav, _headerContainer;
  
    return {
      '.header-container': (_headerContainer = {
        transition: '.5s',
        position: 'fixed',
        display: 'flex',
        width: '100%',
        margin: '0 auto',
        zIndex: 200,
        background: _Scheme.headerColor.bg,
        boxShadow: '15px 15px 45px -20px rgba(0,0,0,0.75)'
  
      }, (0, _defineProperty3.default)(_headerContainer, _Variables.mediaQuery.large, {
        display: 'inline-block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: options.isScrollHeightReached ? 0 : 3,
        maxWidth: options.isScrollHeightReached ? '100%' : 960,
        margin: options.isScrollHeightReached ? '0 auto' : '30px auto'
      }), (0, _defineProperty3.default)(_headerContainer, _Variables.mediaQuery.extraLarge, {
        maxWidth: options.isScrollHeightReached ? '100%' : 1149
      }), (0, _defineProperty3.default)(_headerContainer, 'nav', (_nav = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: options.isScrollHeightReached ? 0 : 3,
        padding: '15px',
        background: _Scheme.headerColor.bg
  
      }, (0, _defineProperty3.default)(_nav, _Variables.mediaQuery.medium, {
        padding: '15px 40px'
      }), (0, _defineProperty3.default)(_nav, '.header-logo', {
        'h3': {
          margin: 0,
          textAlign: 'center',
          color: _Scheme.headerColor.textLogo,
          fontFamily: _Variables.font.first,
          fontSize: 23
        }
      }), (0, _defineProperty3.default)(_nav, '.header-navigation', (_headerNavigation = {
        margin: 0,
        display: 'none'
  
      }, (0, _defineProperty3.default)(_headerNavigation, _Variables.mediaQuery.large, {
        display: 'flex'
      }), (0, _defineProperty3.default)(_headerNavigation, 'a', {
        transition: '.3s',
        color: _Scheme.headerColor.link,
        fontFamily: _Variables.font.third,
        fontSize: 14,
        fontWeight: 400,
        marginRight: 30,
  
        ':hover': {
          color: _Scheme.headerColor.linkHover
        }
      }), _headerNavigation)), (0, _defineProperty3.default)(_nav, '.more-navigation', (0, _defineProperty3.default)({
        display: 'flex',
        position: 'relative',
        top: 2,
  
        'a': {
          transition: '.4s',
          color: _Scheme.headerColor.link,
  
          ':hover': {
            color: _Scheme.headerColor.linkHover
          }
        },
  
        'i': {
          fontSize: 27
        }
  
      }, _Variables.mediaQuery.large, {
        display: 'none'
      })), (0, _defineProperty3.default)(_nav, '.mobile-navigation', (_mobileNavigation = {
        transition: '.4s',
        position: 'absolute',
        background: _Scheme.headerColor.bg,
        width: '100%',
        top: -2,
        left: 0,
        zIndex: -50,
        fontSize: 32,
        transform: options.isMobileNavigationTapped ? 'translateY(21%)' : 'translateY(-100%)',
        boxShadow: '15px 15px 45px -20px rgba(0,0,0,0.75)'
  
      }, (0, _defineProperty3.default)(_mobileNavigation, _Variables.mediaQuery.large, {
        display: 'none'
      }), (0, _defineProperty3.default)(_mobileNavigation, 'a', {
        padding: 15,
        borderTop: '1px solid ' + _Scheme.headerColor.border,
        background: _Scheme.headerColor.bg,
        display: 'block',
        transition: '.3s',
        color: _Scheme.headerColor.link,
  
        ':hover': {
          background: _Helpers2.default.darken(_Scheme.headerColor.bg, 5),
          color: _Scheme.headerColor.linkHover
        },
  
        ':active': {
          background: _Helpers2.default.darken(_Scheme.headerColor.bg, 5),
          color: _Scheme.headerColor.linkHover
        }
      }), (0, _defineProperty3.default)(_mobileNavigation, '.mobile-overlay', {
        display: options.isMobileNavigationTapped ? 'block' : 'none',
        height: '100vh',
        width: '100%',
        position: 'absolute',
        background: options.isMobileNavigationTapped ? _Helpers2.default.rgba('#000', .4) : 'transparent'
      }), _mobileNavigation)), _nav)), _headerContainer)
    };
  };
  
  exports.default = HeaderLayoutStyle;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.footerColor = exports.homeColor = exports.headerColor = exports.globalColor = undefined;
  
  var _Variables = __webpack_require__(75);
  
  var globalColor = exports.globalColor = {
    bgBtnPrimary: _Variables.primaryColor.gravy,
    bgBtnSecondary: _Variables.primaryColor.bears,
    bgBtnSocial: _Variables.primaryColor.bears,
    bgBtnSocialHover: _Variables.primaryColor.roses,
    textBtnPrimary: _Variables.primaryColor.white,
    textBtnSecondary: _Variables.primaryColor.close,
    iconSocial: _Variables.primaryColor.roses,
    iconSocialHover: _Variables.primaryColor.white
  };
  
  var headerColor = exports.headerColor = {
    bg: _Variables.primaryColor.white,
    textLogo: _Variables.primaryColor.roses,
    link: _Variables.primaryColor.shaft,
    linkHover: _Variables.primaryColor.roses,
    border: _Variables.primaryColor.hazzy
  };
  
  var homeColor = exports.homeColor = {
    textTheme: _Variables.primaryColor.roses,
    textDescription: _Variables.primaryColor.happy,
    textDescriptionDark: _Variables.primaryColor.looks,
    textHeaderHero: _Variables.primaryColor.white,
    textHeaderLocation: _Variables.primaryColor.close,
    textHero: _Variables.primaryColor.white,
    textCountdown: _Variables.primaryColor.shaft,
    textShadow: _Variables.primaryColor.black,
    bgIconHero: _Variables.primaryColor.roses,
    bgIconCouple: _Variables.primaryColor.black,
    bgCountdown: _Variables.primaryColor.hazzy,
    bgHero: _Variables.primaryColor.ebony,
    bgDark: _Variables.primaryColor.hazzy,
    bgTheme: _Variables.primaryColor.roses,
    borderCircle: _Variables.primaryColor.skill,
    iconCouple: _Variables.primaryColor.shaft,
    iconTitle: _Variables.primaryColor.skill,
    iconLocation: _Variables.primaryColor.white
  };
  
  var footerColor = exports.footerColor = {
    bg: _Variables.primaryColor.ebony,
    link: _Variables.primaryColor.roses,
    textName: _Variables.primaryColor.roses,
    textPhone: _Variables.primaryColor.stone,
    textCopyright: _Variables.primaryColor.looks,
    icon: _Variables.primaryColor.white
  };

/***/ }),
/* 75 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var primaryColor = exports.primaryColor = {
    white: '#ffffff', // white
    roses: '#ff1583', // light reddish
    shaft: '#373737', // greyish text
    ebony: '#1e1f31', // main backgrounds
    happy: '#777777', // dark     texts
    hazzy: '#edf2f5', // light gray backgrounds
    gravy: '#3e3e3e', // button second bg
    looks: '#8a8a8a', // text on dark bg
    stone: '#9a9a9a', // text on dark bg
    young: '#50565a', // text header on dark bg
    skill: '#c6c6c6', // icons
    bears: '#dadada', // icon backgrounds on dark
    close: '#2d2d2d', // blackish
    black: '#000000' // black
  };
  
  var font = exports.font = {
    first: '"Dancing Script", cursive',
    second: 'Roboto, sans-serif',
    third: '"Droid Serif", serif'
  };
  
  var mediaQuery = exports.mediaQuery = {
    small: '@media (min-width: 554px)',
    medium: '@media (min-width: 768px)',
    large: '@media (min-width: 992px)',
    extraLarge: '@media (min-width: 1200px)'
  };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _tinycolor = __webpack_require__(77);
  
  var _tinycolor2 = _interopRequireDefault(_tinycolor);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var darken = function darken(hexColor, percentage) {
    return (0, _tinycolor2.default)(hexColor).darken(percentage).toHexString();
  };
  
  var lighten = function lighten(hexColor, percentage) {
    return (0, _tinycolor2.default)(hexColor).lighten(percentage).toHexString();
  };
  
  var rgb = function rgb(hexColor) {
    return (0, _tinycolor2.default)(hexColor).toRgbString();
  };
  
  var rgba = function rgba(hexColor, percentage) {
    return (0, _tinycolor2.default)(hexColor).setAlpha(percentage).toString();
  };
  
  exports.default = {
    darken: darken,
    lighten: lighten,
    rgb: rgb,
    rgba: rgba
  };

/***/ }),
/* 77 */
/***/ (function(module, exports) {

  module.exports = require("tinycolor2");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _FooterLayout = __webpack_require__(79);
  
  var _FooterLayout2 = _interopRequireDefault(_FooterLayout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _FooterLayout2.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _FooterLayout = __webpack_require__(80);
  
  var _FooterLayout2 = _interopRequireDefault(_FooterLayout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'footer-thanks'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/images/thank-you.png',
    alt: ''
  }));
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'footer-names'
  }, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Tony ', (0, _jsx3.default)('span', {}, void 0, '&'), ' Noua'));
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'footer-divider'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/images/swirl-left-white.png',
    alt: ''
  }), (0, _jsx3.default)('div', {
    className: 'divider-icon'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })), (0, _jsx3.default)('img', {
    src: '/assets/images/swirl-right-white.png',
    alt: ''
  }));
  
  var _ref4 = (0, _jsx3.default)('div', {
    className: 'footer-phone-number'
  }, void 0, (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('span', {}, void 0, '626-552-2609'), (0, _jsx3.default)('span', {}, void 0, '|'), (0, _jsx3.default)('span', {}, void 0, '714-318-3971')));
  
  var _ref5 = (0, _jsx3.default)('div', {
    className: 'footer-social'
  }, void 0, (0, _jsx3.default)('a', {
    href: 'mailto:codetony25@gmail.com'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-social'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-envelope'
  }))), (0, _jsx3.default)('a', {
    href: 'https://www.facebook.com/events/1007958975989198/'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-social'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-facebook'
  }))), (0, _jsx3.default)('a', {
    href: 'https://www.instagram.com/tonynguyen25/'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-social'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-instagram'
  }))), (0, _jsx3.default)('a', {
    href: 'https://plus.google.com/u/0/112784934391162470946'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-social'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-google-plus'
  }))));
  
  var _ref6 = (0, _jsx3.default)('div', {
    className: 'footer-copyright'
  }, void 0, (0, _jsx3.default)('p', {}, void 0, 'Copyright All Rights Reserved 2016 - ', (0, _jsx3.default)('a', {
    href: '#'
  }, void 0, 'Tony Tai Nguyen')));
  
  var FooterLayout = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(FooterLayout, _React$Component);
  
    function FooterLayout() {
      (0, _classCallCheck3.default)(this, FooterLayout);
      return (0, _possibleConstructorReturn3.default)(this, (FooterLayout.__proto__ || (0, _getPrototypeOf2.default)(FooterLayout)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(FooterLayout, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('footer', {
          className: 'footer-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _FooterLayout2.default.styles
        }), _ref, _ref2, _ref3, _ref4, _ref5, _ref6);
      }
    }]);
    return FooterLayout;
  }(_react2.default.Component), _class.displayName = 'FooterLayout', _temp);
  exports.default = FooterLayout;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _FooterLayout = __webpack_require__(81);
  
  var _FooterLayout2 = _interopRequireDefault(_FooterLayout);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var FooterLayout = (_class = function FooterLayout() {
    (0, _classCallCheck3.default)(this, FooterLayout);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _FooterLayout2.default)();
    }
  })), _class);
  exports.default = new FooterLayout();

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _Scheme = __webpack_require__(74);
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var FooterLayoutStyle = function FooterLayoutStyle() {
    var _h, _footerDivider, _footerPhoneNumber, _footerContainer;
  
    return {
      '.footer-container': (_footerContainer = {
        background: _Scheme.footerColor.bg,
        padding: '99px 5px'
  
      }, (0, _defineProperty3.default)(_footerContainer, _Variables.mediaQuery.small, {
        padding: '99px 30px'
      }), (0, _defineProperty3.default)(_footerContainer, '.footer-thanks', {
        textAlign: 'center',
        paddingBottom: 49
      }), (0, _defineProperty3.default)(_footerContainer, '.footer-names', {
        textAlign: 'center',
  
        'h1': (_h = {
          fontFamily: _Variables.font.first,
          fontWeight: 700,
          margin: 0,
          fontSize: 82,
          color: _Scheme.footerColor.textName
  
        }, (0, _defineProperty3.default)(_h, _Variables.mediaQuery.medium, {
          fontSize: 'calc( 30px + (82 - 30) * ( (100vw - 400px) / ( 800 - 400) ))'
        }), (0, _defineProperty3.default)(_h, 'span', (0, _defineProperty3.default)({
          display: 'block',
          fontSize: 'calc( 30px + (40 - 30) * ( (100vw - 400px) / ( 800 - 400) ))',
          fontFamily: _Variables.font.first,
          fontWeight: 700
  
        }, _Variables.mediaQuery.small, {
          display: 'initial'
        })), _h)
      }), (0, _defineProperty3.default)(_footerContainer, '.footer-divider', (_footerDivider = {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        margin: '50px auto'
  
      }, (0, _defineProperty3.default)(_footerDivider, _Variables.mediaQuery.small, {
        width: 268
      }), (0, _defineProperty3.default)(_footerDivider, 'i', {
        color: _Scheme.footerColor.icon,
        fontSize: 43
      }), _footerDivider)), (0, _defineProperty3.default)(_footerContainer, '.footer-phone-number', (_footerPhoneNumber = {
        width: 270,
        margin: '0 auto'
  
      }, (0, _defineProperty3.default)(_footerPhoneNumber, _Variables.mediaQuery.small, {
        width: 357
      }), (0, _defineProperty3.default)(_footerPhoneNumber, 'p', (0, _defineProperty3.default)({
        margin: 0,
        display: 'flex',
        fontFamily: _Variables.font.second,
        fontSize: 21,
        color: _Scheme.footerColor.textPhone,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
  
      }, _Variables.mediaQuery.small, {
        flexDirection: 'row'
      })), _footerPhoneNumber)), (0, _defineProperty3.default)(_footerContainer, '.footer-social', {
        padding: '68px 0',
        width: 171,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
      }), (0, _defineProperty3.default)(_footerContainer, '.footer-copyright', {
  
        'p': {
          textAlign: 'center',
          color: _Scheme.footerColor.textCopyright,
          fontFamily: _Variables.font.second,
          fontSize: 14,
          fontWeight: 400
        },
  
        'a': {
          transition: '.3s',
          fontFamily: _Variables.font.second,
          fontSize: 14,
          fontWeight: 700,
          color: _Scheme.footerColor.link,
  
          ':hover': {
            color: _Helpers2.default.lighten(_Scheme.footerColor.link, 5)
          }
        }
      }), _footerContainer)
    };
  };
  
  exports.default = FooterLayoutStyle;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _assign = __webpack_require__(25);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _Global = __webpack_require__(83);
  
  var _Global2 = _interopRequireDefault(_Global);
  
  var _Default = __webpack_require__(84);
  
  var _Default2 = _interopRequireDefault(_Default);
  
  var _Normalize = __webpack_require__(85);
  
  var _Normalize2 = _interopRequireDefault(_Normalize);
  
  var _Font = __webpack_require__(86);
  
  var _Font2 = _interopRequireDefault(_Font);
  
  var _Form = __webpack_require__(87);
  
  var _Form2 = _interopRequireDefault(_Form);
  
  var _Button = __webpack_require__(88);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
  	if (!descriptor) return;
  	(0, _defineProperty2.default)(target, property, {
  		enumerable: descriptor.enumerable,
  		configurable: descriptor.configurable,
  		writable: descriptor.writable,
  		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  	});
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  	var desc = {};
  	Object['ke' + 'ys'](descriptor).forEach(function (key) {
  		desc[key] = descriptor[key];
  	});
  	desc.enumerable = !!desc.enumerable;
  	desc.configurable = !!desc.configurable;
  
  	if ('value' in desc || desc.initializer) {
  		desc.writable = true;
  	}
  
  	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
  		return decorator(target, property, desc) || desc;
  	}, desc);
  
  	if (context && desc.initializer !== void 0) {
  		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
  		desc.initializer = undefined;
  	}
  
  	if (desc.initializer === void 0) {
  		Object['define' + 'Property'](target, property, desc);
  		desc = null;
  	}
  
  	return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
  	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var GlobalState = (_class = function GlobalState() {
  	(0, _classCallCheck3.default)(this, GlobalState);
  
  	_initDefineProp(this, 'styles', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
  	enumerable: true,
  	initializer: function initializer() {
  		return (0, _assign2.default)({}, (0, _Font2.default)(), (0, _Normalize2.default)(), (0, _Default2.default)(), (0, _Global2.default)(), (0, _Form2.default)(), (0, _Button2.default)());
  	}
  })), _class);
  exports.default = new GlobalState();

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var GlobalStyle = function GlobalStyle() {
  
    return {};
  };
  
  exports.default = GlobalStyle;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var DefaultStyle = function DefaultStyle() {
  
  	return {
  		'html': {
  			boxSizing: 'border-box',
  			height: '100%'
  		},
  
  		'body': {
  			margin: 0,
  			padding: 0,
  			minHeight: '100%',
  			position: 'relative',
  			WebkitFontSmoothing: 'antialiased',
  			MozOsxFontSmoothing: 'grayscale',
  			textRendering: 'optimizeLegibility'
  		},
  
  		'*, *::before, *::after': {
  			boxSizing: 'inherit',
  			outline: 0
  		},
  
  		'h1, h2, h3, h4, h5, h6, a, span, p, div, li, button': {
  			fontFamily: 'Open Sans'
  		},
  
  		'a': {
  			textDecoration: 'none',
  			cursor: 'pointer'
  		},
  
  		'ul, ol': {
  			listStyle: 'none',
  			padding: 0,
  			margin: 0
  		}
  	};
  };
  
  exports.default = DefaultStyle;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /*! normalize.css v4.1.1 */
  
  var NormalizeStyle = function NormalizeStyle() {
  	var _ref;
  
  	return _ref = {
  		/**
     * 1. Change the default font family in all browsers (opinionated).
     * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
     */
  		'html': {
  			fontFamily: 'sans-serif',
  			MsTextSizeAdjust: '100%',
  			WebkitTextSizeAdjust: '100%'
  		},
  
  		/**
     * Remove the margin in all browsers (opinionated).
     */
  		'body': {
  			margin: 0
  		}
  
  	}, (0, _defineProperty3.default)(_ref, 'article,\n\t\taside,\n\t\tdetails,\n\t\tfigcaption,\n\t\tfigure,\n\t\tfooter,\n\t\theader,\n\t\tmain,\n\t\tmenu,\n\t\tnav,\n\t\tsection,\n\t\tsummary', {
  		display: 'block'
  	}), (0, _defineProperty3.default)(_ref, 'audio,\n\t\tcanvas,\n\t\tprogress,\n\t\tvideo', {
  		display: 'inline-block'
  	}), (0, _defineProperty3.default)(_ref, 'audio:not([controls])', {
  		display: 'none',
  		height: 0
  	}), (0, _defineProperty3.default)(_ref, 'process', {
  		verticalAlign: 'baseline'
  	}), (0, _defineProperty3.default)(_ref, 'template, [hidden]', {
  		display: 'none'
  	}), (0, _defineProperty3.default)(_ref, 'a', {
  		backgroundColor: 'transparent',
  		WebkitTextDecorationScript: 'objects'
  	}), (0, _defineProperty3.default)(_ref, 'a:active, a:hover', {
  		outlineWidth: 0
  	}), (0, _defineProperty3.default)(_ref, 'abbr[title]', {
  		borderBottom: 'none',
  		// TODO ADD text-decoration: underline dotted
  		textDecoration: 'underline'
  	}), (0, _defineProperty3.default)(_ref, 'b, strong', {
  		// TODO ADD font-weight: inherit;
  
  		/**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
  		fontWeight: 'bolder'
  	}), (0, _defineProperty3.default)(_ref, 'dfn', {
  		fontStyle: 'italic'
  	}), (0, _defineProperty3.default)(_ref, 'h1', {
  		fontSize: '2em',
  		margin: '0.67em 0'
  	}), (0, _defineProperty3.default)(_ref, 'mark', {
  		backgroundColor: '#ff0',
  		color: '#000'
  	}), (0, _defineProperty3.default)(_ref, 'small', {
  		fontSize: '80%'
  	}), (0, _defineProperty3.default)(_ref, 'sub', {
  		bottom: '-0.25'
  	}), (0, _defineProperty3.default)(_ref, 'sup', {
  		top: '-0.5em'
  	}), (0, _defineProperty3.default)(_ref, 'img', {
  		borderStyle: 'none'
  	}), (0, _defineProperty3.default)(_ref, 'svg:not(:root)', {
  		overflow: 'hidden'
  	}), (0, _defineProperty3.default)(_ref, 'code, kbd, pre, samp', {
  		fontFamily: 'monospace, monospace',
  		fontSize: '1em'
  	}), (0, _defineProperty3.default)(_ref, 'figuare', {
  		margin: '1em 40px'
  	}), (0, _defineProperty3.default)(_ref, 'hr', {
  		boxSizing: 'content-box',
  		height: 0,
  		overflow: 'visible'
  	}), (0, _defineProperty3.default)(_ref, 'button, input, select, textarea', {
  		font: 'inherit',
  		margin: 0
  	}), (0, _defineProperty3.default)(_ref, 'optgroup', {
  		fontWeight: 'bold'
  	}), (0, _defineProperty3.default)(_ref, 'button, input', {
  		overflow: 'visible'
  	}), (0, _defineProperty3.default)(_ref, 'button, select', {
  		textTranform: 'none'
  	}), (0, _defineProperty3.default)(_ref, 'button, html [type="button"], [type="reset"], [type="submit"]', {
  		WebkitAppearance: 'button'
  	}), (0, _defineProperty3.default)(_ref, 'button::-moz-focus-inner,\n\t\t[type="button"]::-moz-focus-inner,\n\t\t[type="reset"]::-moz-focus-inner,\n\t\t[type="submit"]::-moz-focus-inner', {
  		borderStyle: 'none',
  		padding: 0
  	}), (0, _defineProperty3.default)(_ref, 'button:-moz-focusring,\n\t\t[type="button"]:-moz-focusring,\n\t\t[type="reset"]:-moz-focusring,\n\t\t[type="submit"]:-moz-focusring', {
  		outline: '1px dotted ButtonText'
  	}), (0, _defineProperty3.default)(_ref, 'fieldset', {
  		border: '1px solid #c0c0c0',
  		margin: '0 2px',
  		padding: '0.35em 0.625em 0.75em'
  	}), (0, _defineProperty3.default)(_ref, 'legend', {
  		boxSizing: 'border-box',
  		color: 'inherit',
  		display: 'table',
  		maxWidth: '100%',
  		padding: 0,
  		whiteSpace: 'normal'
  	}), (0, _defineProperty3.default)(_ref, 'textarea', {
  		overflow: 'auto'
  	}), (0, _defineProperty3.default)(_ref, '[type="checkbox"], [type="radio"]', {
  		boxSizing: 'border-box',
  		padding: 0
  	}), (0, _defineProperty3.default)(_ref, '[type="number"]::-webkit-inner-spin-button,\n\t\t\t[type="number"]::-webkit-outer-spin-button', {
  		height: 'auto'
  	}), (0, _defineProperty3.default)(_ref, '[type="search"]', {
  		WebkitAppearance: 'textfield',
  		outlineOffset: -2
  	}), (0, _defineProperty3.default)(_ref, '[type="search"]::-webkit-search-cancel-button,\n\t\t\t[type="search"]::-webkit-search-decoration', {
  		WebkitAppearance: 'none'
  	}), (0, _defineProperty3.default)(_ref, '::-webkit-input-placeholder', {
  		color: 'inherit',
  		opacity: 0.54
  	}), (0, _defineProperty3.default)(_ref, '::-webkit-file-upload-button', {
  		WebkitAppearance: 'button',
  		font: 'inherit'
  	}), _ref;
  };
  
  exports.default = NormalizeStyle;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var FontStyle = function FontStyle() {
  
  	return {};
  };
  
  exports.default = FontStyle;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var formStyle = function formStyle() {
  	return {};
  };
  
  exports.default = formStyle;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  var _Scheme = __webpack_require__(74);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var buttonStyle = function buttonStyle() {
  
    return {
      '.btn': {
        width: 202,
        height: 60,
        fontFamily: _Variables.font.second,
        fontSize: 15,
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 0,
        borderRadius: 5,
        cursor: 'pointer',
  
        '&.btn-primary': {
          transition: '.3s',
          background: _Scheme.globalColor.bgBtnPrimary,
          color: _Scheme.globalColor.textBtnPrimary,
  
          ':hover': {
            background: _Helpers2.default.lighten(_Scheme.globalColor.bgBtnPrimary, 5)
          },
  
          ':active': {
            background: _Helpers2.default.darken(_Scheme.globalColor.bgBtnPrimary, 5)
          }
        },
  
        '&.btn-secondary': {
          transition: '.3s',
          background: _Scheme.globalColor.bgBtnSecondary,
          color: _Scheme.globalColor.textBtnSecondary,
  
          ':hover': {
            background: _Helpers2.default.lighten(_Scheme.globalColor.bgBtnSecondary, 5)
          },
  
          ':active': {
            background: _Helpers2.default.darken(_Scheme.globalColor.bgBtnSecondary, 5)
          }
        },
  
        '&.btn-social': {
          width: 42,
          height: 38,
          transition: '0.3s',
          background: _Scheme.globalColor.bgBtnSocial,
  
          'i': {
            transition: '0.3s',
            color: _Scheme.globalColor.iconSocial
          },
  
          ':hover': {
            background: _Scheme.globalColor.bgBtnSocialHover,
  
            'i': {
              color: _Scheme.globalColor.iconSocialHover
            }
          }
        },
  
        '&.btn-rounded': {
          borderRadius: 32
        }
      }
    };
  };
  
  exports.default = buttonStyle;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(90);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)(_Home2.default, {});
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      return _ref;
    }
  };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(91);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Hero = __webpack_require__(92);
  
  var _Hero2 = _interopRequireDefault(_Hero);
  
  var _Couple = __webpack_require__(96);
  
  var _Couple2 = _interopRequireDefault(_Couple);
  
  var _Location = __webpack_require__(100);
  
  var _Location2 = _interopRequireDefault(_Location);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'home-container'
  }, void 0, (0, _jsx3.default)(_Hero2.default, {}), (0, _jsx3.default)(_Couple2.default, {}), (0, _jsx3.default)(_Location2.default, {}));
  
  var Home = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);
  
    function Home() {
      (0, _classCallCheck3.default)(this, Home);
      return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Home, [{
      key: 'render',
      value: function render() {
        return _ref;
      }
    }]);
    return Home;
  }(_react2.default.Component), _class.displayName = 'Home', _temp);
  exports.default = Home;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _mobx = __webpack_require__(71);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HomeState = function HomeState() {
    (0, _classCallCheck3.default)(this, HomeState);
  };
  
  exports.default = new HomeState();

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Hero = __webpack_require__(93);
  
  var _Hero2 = _interopRequireDefault(_Hero);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Hero2.default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _reactScroll = __webpack_require__(68);
  
  var _Hero = __webpack_require__(94);
  
  var _Hero2 = _interopRequireDefault(_Hero);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'hero-overlay'
  });
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'hero-main'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'hero-title'
  }, void 0, (0, _jsx3.default)('h1', {}, void 0, 'Tony ', (0, _jsx3.default)('span', {}, void 0, '&'), ' Noua')), (0, _jsx3.default)('div', {
    className: 'hero-divider'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/views/Home/flower-left.png',
    alt: ''
  }), (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  }), (0, _jsx3.default)('img', {
    src: '/assets/views/Home/flower-right.png',
    alt: ''
  })), (0, _jsx3.default)('div', {
    className: 'hero-date-wrapper'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/views/Home/flower-divider.png',
    alt: ''
  }), (0, _jsx3.default)('div', {
    className: 'hero-date'
  }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'We are getting married'), (0, _jsx3.default)('h2', {}, void 0, 'June 17, 2017')), (0, _jsx3.default)('img', {
    src: '/assets/views/Home/flower-divider.png',
    alt: ''
  })));
  
  var Hero = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Hero, _React$Component);
  
    function Hero() {
      (0, _classCallCheck3.default)(this, Hero);
      return (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Hero, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_reactScroll.Element, {
          name: 'home',
          className: 'hero-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _Hero2.default.styles
        }), _ref, _ref2);
      }
    }]);
    return Hero;
  }(_react2.default.Component), _class.displayName = 'Hero', _temp);
  exports.default = Hero;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _Hero = __webpack_require__(95);
  
  var _Hero2 = _interopRequireDefault(_Hero);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var HeroState = (_class = function HeroState() {
    (0, _classCallCheck3.default)(this, HeroState);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _Hero2.default)();
    }
  })), _class);
  exports.default = new HeroState();

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _Scheme = __webpack_require__(74);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HeroStyle = function HeroStyle() {
    var _h, _heroDateWrapper;
  
    return {
      '.hero-container': {
        position: 'relative',
        background: 'url(/assets/views/Home/proposal.gif) center center no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 60,
        alignItems: 'center',
  
        ':after': {
          background: 'linear-gradient(-45deg, #ffffff 16px, transparent 0), linear-gradient(45deg, #ffffff 16px, transparent 0)',
          backgroundPosition: 'left-bottom',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '32px 32px',
          content: '" "',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 32
        },
  
        '.hero-overlay': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: _Scheme.homeColor.bgHero,
          opacity: 0.4,
          left: 0,
          top: 0
        },
  
        '.hero-main': {
          position: 'relative',
          zIndex: 100
        },
  
        '.hero-title': {
          textAlign: 'center',
  
          'h1': (_h = {
            fontFamily: _Variables.font.first,
            fontWeight: 700,
            margin: 0,
            fontSize: 82,
            color: _Scheme.homeColor.textHeaderHero,
            textShadow: '5px 5px 20px ' + _Scheme.homeColor.textShadow
  
          }, (0, _defineProperty3.default)(_h, _Variables.mediaQuery.medium, {
            fontSize: 'calc( 30px + (82 - 30) * ( (100vw - 400px) / ( 800 - 400) ))'
          }), (0, _defineProperty3.default)(_h, 'span', (0, _defineProperty3.default)({
            display: 'block',
            fontSize: 'calc( 30px + (40 - 30) * ( (100vw - 400px) / ( 800 - 400) ))',
            fontFamily: _Variables.font.first,
            fontWeight: 700
  
          }, _Variables.mediaQuery.small, {
            display: 'initial'
          })), _h)
        },
  
        '.hero-divider': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '55px 0',
          margin: '0 auto',
          width: 268,
  
          'i': {
            color: _Scheme.homeColor.bgIconHero,
            fontSize: 28
          }
        },
  
        '.hero-date-wrapper': (_heroDateWrapper = {
          textAlign: 'center',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 472,
          justifyContent: 'center'
  
        }, (0, _defineProperty3.default)(_heroDateWrapper, _Variables.mediaQuery.medium, {
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }), (0, _defineProperty3.default)(_heroDateWrapper, 'img', {
          width: 109,
          margin: '0 auto'
        }), (0, _defineProperty3.default)(_heroDateWrapper, '.hero-date', (0, _defineProperty3.default)({
          margin: '30px 0'
  
        }, _Variables.mediaQuery.medium, {
          margin: '0'
        })), (0, _defineProperty3.default)(_heroDateWrapper, 'h4', {
          fontFamily: _Variables.font.third,
          fontSize: 16,
          fontStyle: 'italic',
          fontWeight: 700,
          margin: 0,
          paddingBottom: 18,
          color: _Scheme.homeColor.textHero,
          textShadow: '5px 5px 20px ' + _Scheme.homeColor.textShadow
        }), (0, _defineProperty3.default)(_heroDateWrapper, 'h2', {
          margin: 0,
          color: _Scheme.homeColor.textHero,
          fontFamily: _Variables.font.second,
          textShadow: '5px 5px 20px ' + _Scheme.homeColor.textShadow
        }), _heroDateWrapper)
      }
    };
  };
  
  exports.default = HeroStyle;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Couple = __webpack_require__(97);
  
  var _Couple2 = _interopRequireDefault(_Couple);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Couple2.default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _class2, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _reactScroll = __webpack_require__(68);
  
  var _mobxReact = __webpack_require__(67);
  
  var _Couple = __webpack_require__(98);
  
  var _Couple2 = _interopRequireDefault(_Couple);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'couple-background'
  });
  
  var _ref2 = (0, _jsx3.default)('div', {
    className: 'couple-wrapper'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'couple-first'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'couple-description'
  }, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Tony Nguyen'), (0, _jsx3.default)('p', {}, void 0, 'You are the reason why I work hard everyday. Cannot wait to grow very old with you.')), (0, _jsx3.default)('div', {
    className: 'couple-first-image'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/views/Home/couple-first.png',
    alt: ''
  }))), (0, _jsx3.default)('div', {
    className: 'couple-divider'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })), (0, _jsx3.default)('div', {
    className: 'couple-second'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'couple-second-image'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/views/Home/couple-second.png',
    alt: ''
  })), (0, _jsx3.default)('div', {
    className: 'couple-description'
  }, void 0, (0, _jsx3.default)('h3', {}, void 0, 'Noua Vue'), (0, _jsx3.default)('p', {}, void 0, 'My love for you will forever grow and never get old. I am definately one of the luckiest souls on Earth to be marrying you.'))));
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'couple-rsvp'
  }, void 0, (0, _jsx3.default)('a', {
    href: 'http://add.eventable.com/events/58871ae8e25dee001a6ab3b4/58871aeae1989d0016055ae2/',
    className: 'eventable-link',
    target: '_blank',
    'data-key': '58871ae8e25dee001a6ab3b4',
    'data-event': '58871aeae1989d0016055ae2',
    'data-style': '1'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-primary btn-rounded'
  }, void 0, 'Save The Date')));
  
  var Couple = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
    (0, _inherits3.default)(Couple, _React$Component);
  
    function Couple() {
      (0, _classCallCheck3.default)(this, Couple);
      return (0, _possibleConstructorReturn3.default)(this, (Couple.__proto__ || (0, _getPrototypeOf2.default)(Couple)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Couple, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_reactScroll.Element, {
          name: 'couple',
          className: 'couple-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _Couple2.default.styles
        }), _ref, _ref2, _ref3);
      }
    }]);
    return Couple;
  }(_react2.default.Component), _class2.displayName = 'Couple', _temp)) || _class;
  
  exports.default = Couple;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  
  var _mobx = __webpack_require__(71);
  
  var _Couple = __webpack_require__(99);
  
  var _Couple2 = _interopRequireDefault(_Couple);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var CoupleState = (_class = function CoupleState() {
    var _this = this;
  
    (0, _classCallCheck3.default)(this, CoupleState);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  
    _initDefineProp(this, 'seconds', _descriptor2, this);
  
    _initDefineProp(this, 'minutes', _descriptor3, this);
  
    _initDefineProp(this, 'hours', _descriptor4, this);
  
    _initDefineProp(this, 'days', _descriptor5, this);
  
    this.getRemainingTime = function (endtime) {
      var total = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor(total / 1000 % 60);
      var minutes = Math.floor(total / 1000 / 60 % 60);
      var hours = Math.floor(total / (1000 * 60 * 60) % 24);
      var days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total: total,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    };
  
    this.deadline = new Date(Date.parse('June 17 2017'));
  
    setInterval(function () {
      _this.seconds = _this.getRemainingTime(_this.deadline).seconds;
      _this.minutes = _this.getRemainingTime(_this.deadline).minutes;
      _this.hours = _this.getRemainingTime(_this.deadline).hours;
      _this.days = _this.getRemainingTime(_this.deadline).days;
    }, 1000);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _Couple2.default)();
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'seconds', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return this.getRemainingTime('June 17 2017').seconds;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'minutes', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return this.getRemainingTime('June 17 2017').minutes;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'hours', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return this.getRemainingTime('June 17 2017').hours;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'days', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return this.getRemainingTime('June 17 2017').days;
    }
  })), _class);
  exports.default = new CoupleState();

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _Scheme = __webpack_require__(74);
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var CoupleStyle = function CoupleStyle() {
    var _coupleWrapper, _coupleFirst, _coupleSecond, _coupleDescription, _i, _coupleDivider;
  
    var coupleFirstAndSecond = function coupleFirstAndSecond() {
      var _ref;
  
      return _ref = {
        display: 'flex',
        alignItems: 'center',
        maxWidth: 536,
        margin: '0 auto',
        textAlign: 'center'
  
      }, (0, _defineProperty3.default)(_ref, _Variables.mediaQuery.small, {
        flexDirection: 'row'
      }), (0, _defineProperty3.default)(_ref, 'img', {
        height: 150,
        borderRadius: '50%'
      }), _ref;
    };
  
    return {
      '.couple-container': {
        padding: '99px 30px',
        position: 'relative',
  
        '.couple-background': {
          backgroundImage: 'url(/assets/views/Home/flowers-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0
        },
  
        '.couple-wrapper': (_coupleWrapper = {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: '0 auto',
          position: 'relative',
          zIndex: 100
  
        }, (0, _defineProperty3.default)(_coupleWrapper, _Variables.mediaQuery.large, {
          flexDirection: 'row',
          maxWidth: 940
        }), (0, _defineProperty3.default)(_coupleWrapper, _Variables.mediaQuery.extraLarge, {
          maxWidth: 1127
        }), _coupleWrapper),
  
        '.couple-first': (_coupleFirst = {
          mixin: coupleFirstAndSecond(),
          flexDirection: 'column-reverse'
  
        }, (0, _defineProperty3.default)(_coupleFirst, _Variables.mediaQuery.large, {
          textAlign: 'right'
        }), (0, _defineProperty3.default)(_coupleFirst, 'img', (0, _defineProperty3.default)({
          marginLeft: 20
  
        }, _Variables.mediaQuery.extraLarge, {
          height: 220
        })), _coupleFirst),
  
        '.couple-second': (_coupleSecond = {
          mixin: coupleFirstAndSecond(),
          flexDirection: 'column'
  
        }, (0, _defineProperty3.default)(_coupleSecond, _Variables.mediaQuery.large, {
          textAlign: 'left'
        }), (0, _defineProperty3.default)(_coupleSecond, 'img', (0, _defineProperty3.default)({
          marginRight: 20
  
        }, _Variables.mediaQuery.extraLarge, {
          height: 220
        })), _coupleSecond),
  
        '.couple-description': (_coupleDescription = {}, (0, _defineProperty3.default)(_coupleDescription, _Variables.mediaQuery.large, {
          maxWidth: 260,
          minWidth: 260
        }), (0, _defineProperty3.default)(_coupleDescription, 'h3', {
          fontSize: 42,
          margin: 0,
          fontWeight: 700,
          fontFamily: _Variables.font.first,
          color: _Scheme.homeColor.textTheme,
          padding: 10
        }), (0, _defineProperty3.default)(_coupleDescription, 'p', {
          color: _Scheme.homeColor.textDescription,
          fontFamily: _Variables.font.second,
          fontSize: 15,
          fontWeight: 400
        }), _coupleDescription),
  
        '.couple-divider': (_coupleDivider = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '45px auto',
          borderRadius: '50%',
          width: 44,
          height: 44,
          background: _Helpers2.default.rgba(_Scheme.homeColor.bgIconCouple, 0.1)
  
        }, (0, _defineProperty3.default)(_coupleDivider, _Variables.mediaQuery.large, {
          width: 66,
          height: 66,
          position: 'absolute',
          left: '50%',
          margin: '40px auto 0',
          transform: 'translateX(-50%)'
        }), (0, _defineProperty3.default)(_coupleDivider, _Variables.mediaQuery.extraLarge, {
          width: 88,
          height: 88,
          marginTop: 60
        }), (0, _defineProperty3.default)(_coupleDivider, 'i', (_i = {
          color: _Helpers2.default.rgba(_Scheme.homeColor.iconCouple, .3)
  
        }, (0, _defineProperty3.default)(_i, _Variables.mediaQuery.large, {
          fontSize: 22
        }), (0, _defineProperty3.default)(_i, _Variables.mediaQuery.extraLarge, {
          fontSize: 33
        }), _i)), _coupleDivider)
      },
  
      '.couple-countdown': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '60px auto',
        maxWidth: 376,
        flexWrap: 'wrap',
  
        '.countdown-box': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          background: _Scheme.homeColor.bgCountdown,
          padding: 10,
          width: 91,
          height: 119,
  
          'h3': {
            color: _Scheme.homeColor.textCountdown,
            fontFamily: _Variables.font.second,
            fontSize: 30,
            margin: 0,
            paddingTop: 12
          },
  
          'p': {
            color: _Scheme.homeColor.textTheme,
            fontFamily: _Variables.font.second,
            fontSize: 15,
            margin: '12px auto'
          }
        }
      },
  
      '.couple-rsvp': {
        textAlign: 'center',
        position: 'relative',
        zIndex: 100
      }
    };
  };
  
  exports.default = CoupleStyle;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Location = __webpack_require__(101);
  
  var _Location2 = _interopRequireDefault(_Location);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Location2.default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp2;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _reactScroll = __webpack_require__(68);
  
  var _Location = __webpack_require__(102);
  
  var _Location2 = _interopRequireDefault(_Location);
  
  var _TitleBlock = __webpack_require__(104);
  
  var _TitleBlock2 = _interopRequireDefault(_TitleBlock);
  
  var _GuestList = __webpack_require__(108);
  
  var _GuestList2 = _interopRequireDefault(_GuestList);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref2 = (0, _jsx3.default)(_TitleBlock2.default, {
    section: 'Our Wedding Information',
    title: 'Wedding Event Location',
    description: 'Tony and Noua\'s Venue and Time'
  });
  
  var _ref3 = (0, _jsx3.default)('div', {
    className: 'location-image'
  }, void 0, (0, _jsx3.default)('img', {
    src: '/assets/views/Home/tonyandnoua.png',
    alt: ''
  }));
  
  var _ref4 = (0, _jsx3.default)('h5', {}, void 0, 'Join Us');
  
  var _ref5 = (0, _jsx3.default)('h2', {}, void 0, 'When and Where');
  
  var _ref6 = (0, _jsx3.default)('p', {}, void 0, 'The ceremony will be held on Saturday, ', (0, _jsx3.default)('strong', {}, void 0, 'June 17, 2017'), ' at ', (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('strong', {}, void 0, 'Yorba Linda Mansion - 4490 Ohio Street, Yorba Linda, CA 92886, United States'), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}), ' It will start at ', (0, _jsx3.default)('strong', {}, void 0, 'Twelve O\'Clock'), ' in the afternoon.');
  
  var _ref7 = (0, _jsx3.default)('p', {}, void 0, 'A celebration with food and dancing will follow at the venue. Please RSVP with First and Last name by June 12. Click RSVP below if you plan on attending');
  
  var _ref8 = (0, _jsx3.default)('p', {}, void 0, 'We ', (0, _jsx3.default)('strong', {}, void 0, 'Highly Recommend'), ' that people try to use ', (0, _jsx3.default)('strong', {}, void 0, 'UBER/LYFT'), ' or ', (0, _jsx3.default)('strong', {}, void 0, 'Carpool'), ' as it may be hard to find a parking spot.');
  
  var _ref9 = (0, _jsx3.default)('div', {
    className: 'location-summary'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'summary-first'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'summary-icon'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-paper-plane'
  })), (0, _jsx3.default)('p', {}, void 0, 'June 17, 2017')), (0, _jsx3.default)('div', {
    className: 'summary-second'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'summary-icon'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-paper-plane'
  })), (0, _jsx3.default)('p', {}, void 0, 'Yorba Linda Mansion')), (0, _jsx3.default)('div', {
    className: 'summary-fourth'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'summary-icon'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-paper-plane'
  })), (0, _jsx3.default)('p', {}, void 0, '12:00 PM')));
  
  var _ref10 = (0, _jsx3.default)('a', {
    href: 'mailto:nouavue@gmail.com?subject=Tony%20and%20Noua%20Wedding%20Reservation%20(RSVP)%20Request!&body=Please%20email%20us%20who%20is%20planning%20on%20attending%20Tony%20and%20Noua\'s%20wedding%20and%20if%20you%20are%20planning%20on%20bringing%20more%20guests%20(+1\'s)%20below%20(examples%20provided,%20please%20change%20names,%20guests,%20and%20notes).%0D%0A%0D%0A%20Name:%0D%0A-%20John%20Smith%0D%0A%0D%0A%20More%20Guests:%0D%0A-%20Max%20Power%0D%0A-%20Britney%20Spears%0D%0A%0D%0AAdditional%20Notes:%0D%0A-%20Can\'t%20wait%20to%20see%20Tony%20and%20Noua%20get%20married%20on%20June%2017th!%20:)'
  }, void 0, (0, _jsx3.default)('button', {
    className: 'btn btn-secondary btn-rounded'
  }, void 0, 'RSVP'));
  
  var _ref11 = (0, _jsx3.default)(_GuestList2.default, {});
  
  var Location = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Location, _React$Component);
  
    function Location() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Location);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Location.__proto__ || (0, _getPrototypeOf2.default)(Location)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _this.handleRequestClose = function () {
        return _this.setState({ open: false });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Location, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)(_reactScroll.Element, {
          name: 'location',
          className: 'location-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _Location2.default.styles
        }), _ref2, (0, _jsx3.default)(_reactScroll.Element, {
          name: 'rsvp',
          className: 'location-wrapper'
        }, void 0, _ref3, (0, _jsx3.default)('div', {
          className: 'location-details'
        }, void 0, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, (0, _jsx3.default)('div', {
          className: 'location-rsvp',
          style: { display: 'flex !important', justifyContent: 'space-between', width: '100%' }
        }, void 0, _ref10, _ref11))));
      }
    }]);
    return Location;
  }(_react2.default.Component), _class.displayName = 'Location', _temp2);
  exports.default = Location;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _Location = __webpack_require__(103);
  
  var _Location2 = _interopRequireDefault(_Location);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var Location = (_class = function Location() {
    (0, _classCallCheck3.default)(this, Location);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _Location2.default)();
    }
  })), _class);
  exports.default = new Location();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(73);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _Scheme = __webpack_require__(74);
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var LocationStyle = function LocationStyle() {
    var _locationDetails, _locationSummary;
  
    return {
      '.location-container': {
        background: _Scheme.homeColor.bgDark,
        padding: '99px 30px',
  
        '.location-wrapper': (0, _defineProperty3.default)({
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          maxWidth: 1167
  
        }, _Variables.mediaQuery.large, {
          justifyContent: 'space-around',
          paddingTop: 100,
          flexDirection: 'row'
        }),
  
        '.location-image': {
          margin: '0 auto',
          maxWidth: '60%',
          minWidth: 210,
  
          'img': {
            borderRadius: '50%',
            width: '100%',
            padding: '20px 0 40px 0'
          }
        },
  
        '.location-details': (_locationDetails = {
          maxWidth: 613
  
        }, (0, _defineProperty3.default)(_locationDetails, _Variables.mediaQuery.medium, {
          margin: '0 auto'
        }), (0, _defineProperty3.default)(_locationDetails, _Variables.mediaQuery.large, {
          maxWidth: 536,
          paddingLeft: 30
        }), (0, _defineProperty3.default)(_locationDetails, 'h5', {
          margin: 0,
          fontFamily: _Variables.font.second,
          fontWeight: 400,
          fontSize: 14,
          color: _Scheme.homeColor.textDescriptionDark,
          textTransform: 'uppercase'
        }), (0, _defineProperty3.default)(_locationDetails, 'h2', {
          fontFamily: _Variables.font.second,
          fontSize: 37,
          fontWeight: 700,
          margin: '26px 0',
          textTransform: 'uppercase',
          color: _Scheme.homeColor.textHeaderLocation
        }), (0, _defineProperty3.default)(_locationDetails, 'p', {
          fontFamily: _Variables.font.second,
          color: _Scheme.homeColor.textDescriptionDark,
          fontSize: 16,
          fontWeight: 400
        }), _locationDetails),
  
        '.location-summary': (_locationSummary = {
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 36
  
        }, (0, _defineProperty3.default)(_locationSummary, _Variables.mediaQuery.small, {
          justifyContent: 'space-between'
        }), (0, _defineProperty3.default)(_locationSummary, '.summary-first,\n          .summary-second,\n          .summary-third,\n          .summary-fourth\n        ', {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 20,
          width: 208
        }), (0, _defineProperty3.default)(_locationSummary, '.summary-icon', {
          background: _Scheme.homeColor.bgTheme,
          width: 46,
          height: 46,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 17,
  
          'i': {
            color: _Scheme.homeColor.iconLocation,
            fontSize: 14
          }
        }), (0, _defineProperty3.default)(_locationSummary, 'p', {
          fontWeight: 700
        }), _locationSummary),
  
        '.location-rsvp': (0, _defineProperty3.default)({
          textAlign: 'center',
          paddingTop: 49
  
        }, _Variables.mediaQuery.small, {
          display: 'inline-block',
          textAlign: 'initial'
        })
      }
    };
  };
  
  exports.default = LocationStyle;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _TitleBlock = __webpack_require__(105);
  
  var _TitleBlock2 = _interopRequireDefault(_TitleBlock);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _TitleBlock2.default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _jassy = __webpack_require__(60);
  
  var _TitleBlock = __webpack_require__(106);
  
  var _TitleBlock2 = _interopRequireDefault(_TitleBlock);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _ref = (0, _jsx3.default)('div', {
    className: 'title-block-divider'
  }, void 0, (0, _jsx3.default)('img', {
    src: 'assets/images/swirl-left.png',
    alt: ''
  }), (0, _jsx3.default)('div', {
    className: 'title-block-icon'
  }, void 0, (0, _jsx3.default)('i', {
    className: 'fa fa-heart'
  })), (0, _jsx3.default)('img', {
    src: 'assets/images/swirl-right.png',
    alt: ''
  }));
  
  var TitleBlock = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(TitleBlock, _React$Component);
  
    function TitleBlock() {
      (0, _classCallCheck3.default)(this, TitleBlock);
      return (0, _possibleConstructorReturn3.default)(this, (TitleBlock.__proto__ || (0, _getPrototypeOf2.default)(TitleBlock)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(TitleBlock, [{
      key: 'render',
      value: function render() {
        return (0, _jsx3.default)('div', {
          className: 'title-block-container'
        }, void 0, (0, _jsx3.default)(_jassy.Style, {
          rules: _TitleBlock2.default.styles
        }), (0, _jsx3.default)('div', {
          className: 'title-block-header'
        }, void 0, (0, _jsx3.default)('h5', {}, void 0, this.props.section), (0, _jsx3.default)('h3', {}, void 0, this.props.title), (0, _jsx3.default)('p', {}, void 0, this.props.description)), _ref);
      }
    }]);
    return TitleBlock;
  }(_react2.default.Component), _class.displayName = 'TitleBlock', _temp);
  exports.default = TitleBlock;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(70);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(71);
  
  var _TitleBlock = __webpack_require__(107);
  
  var _TitleBlock2 = _interopRequireDefault(_TitleBlock);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var TitleBlock = (_class = function TitleBlock() {
    (0, _classCallCheck3.default)(this, TitleBlock);
  
    _initDefineProp(this, 'styles', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'styles', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _TitleBlock2.default)();
    }
  })), _class);
  exports.default = new TitleBlock();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Scheme = __webpack_require__(74);
  
  var _Helpers = __webpack_require__(76);
  
  var _Helpers2 = _interopRequireDefault(_Helpers);
  
  var _Variables = __webpack_require__(75);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var TitleBlockStyle = function TitleBlockStyle() {
  
    return {
      '.title-block-container': {
        textAlign: 'center',
  
        '.title-block-header': {
          'h5': {
            fontSize: 14,
            fontFamily: _Variables.font.second,
            fontWeight: 700,
            color: _Scheme.homeColor.textDescriptionDark,
            textTransform: 'uppercase',
            margin: 0
          },
  
          'h3': {
            fontFamily: _Variables.font.first,
            fontSize: 58,
            fontWeight: 700,
            color: _Scheme.homeColor.textTheme,
            margin: 0,
            padding: '28px 0'
          },
  
          'p': {
            maxWidth: 734,
            margin: '0 auto',
            color: _Scheme.homeColor.textDescriptionDark,
            fontSize: 16,
            fontWeight: 400,
            fontFamily: _Variables.font.second
          }
        },
  
        '.title-block-divider': {
          padding: '40px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 211,
          margin: '0 auto',
  
          '.title-block-icon': {
            width: 25,
            height: 25,
            border: '1px solid ' + _Scheme.homeColor.borderCircle,
            borderRadius: '50%',
            position: 'relative',
            bottom: 4
          },
  
          'i': {
            color: _Scheme.homeColor.iconTitle,
            verticalAlign: 'middle',
            fontSize: 10,
            position: 'relative',
            top: 1.5
          }
        }
      }
    };
  };
  
  exports.default = TitleBlockStyle;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _getPrototypeOf = __webpack_require__(55);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(56);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(57);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(58);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(59);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Dialog = __webpack_require__(109);
  
  var _Dialog2 = _interopRequireDefault(_Dialog);
  
  var _FlatButton = __webpack_require__(110);
  
  var _FlatButton2 = _interopRequireDefault(_FlatButton);
  
  var _RaisedButton = __webpack_require__(111);
  
  var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
  
  var _RadioButton = __webpack_require__(112);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var styles = {
    radioButton: {
      marginTop: 16,
      display: 'inline-block',
      width: '50%'
    }
  };
  
  /**
   * Dialog content can be scrollable.
   */
  
  var GuestList = function (_React$Component) {
    (0, _inherits3.default)(GuestList, _React$Component);
  
    function GuestList() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, GuestList);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GuestList.__proto__ || (0, _getPrototypeOf2.default)(GuestList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _this.handleOpen = function () {
        _this.setState({ open: true });
      }, _this.handleClose = function () {
        _this.setState({ open: false });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(GuestList, [{
      key: 'render',
      value: function render() {
        var actions = [(0, _jsx3.default)(_RaisedButton2.default, {
          label: 'Close',
          secondary: true,
          onClick: this.handleClose
        })];
  
        var radios = ['ADELYNN THAO', 'ALENA THAO', 'ALEX LEE', 'ALEX LY', 'ALLISON PYLE', 'AMY YANG', 'ATHENA VUE', 'ALEB CHA', 'BRANDON IWASAKI', 'CALLISTE THAO', 'CARTER VUE', 'CECILIA MOUA', 'CHA MOUAVANGSOU', 'CHA YANG', 'CHRIS CASTILLO', 'CHARLOTTE CHEN', 'CHIMENG YANG', 'CHLOEY THAO', 'CHUEFUE XIONG', 'DANIEL VUE', 'DIANE ULLOA', 'DELYNN THAO', 'ADONIS PEREZ-VUE', 'GRANDMA CHAY YIA YANG', 'GRANDPA CHAY YIA YANG', 'JACKIE VUE MOUA', 'JACKIE XIONG', 'JAKE CHEN', 'JAMIE YOUA YANG', 'JAYJAY MARIE', 'JEANNIE', 'JESUS HERNANDEZ', 'JOCELYN YANG', 'JOHN SALCIDO', 'KA VUE', 'KAILEE YANG', 'KAITLYN YANG', 'KALEO KAUHAA HOUSE', 'KARI YANG', 'KIA VUE-THAO', 'LEE YANG', 'LENNI CORZO', 'LOGAN SALCIDO', 'LUNA XIONG', 'LY KOU', 'MAI BANG', 'MAI NHIA VUE', 'MAINUE VUE', 'MELINDA PEREZ-VUE', 'MONICA LOPEZ YANG', 'MYA CHEN', 'MYLEAH XIONG', 'NALEE CHA', 'NICO WIBOWOW', 'NIKKY XIONG', 'ODYS THAO', 'PA NIA VUE', 'PASOUA YANG', 'PETER VUE', 'PETER XIONG-XIA YANG', 'RICHARD XIONG', 'ROB CHEN', 'RUDI MARCI', 'SARAH YANG', 'SAUCI XIONG', 'VANG VUE', 'SHAWN PHENG XIONG', 'SOUA THAO', 'STEPHANIE XIONG', 'SUZIE YANG', 'TENG YANG', 'TOMMY VUE', 'TONG XIA VUE', 'TONGKOU XIONG', 'TRINITY YANG', 'TU CHA', 'TYLER CHA', 'VAN ANH NGUYEN', 'VANG MOUAVANGSOU', 'VIKKY XIONG', 'WANG YU XIONG', 'TONGKOU XIONG', 'TRINITY YANG', 'TU CHA', 'TYLER CHA', 'VAN ANH NGUYEN', 'VANG MOUAVANGSOU', 'VIKKY XIONG', 'WANG YU XIONG', 'XENGXAY YANG', 'YUPHENG YANG', 'ALICE ANH', 'ALLISON WRIGHT', 'BAILEY WRIGHT', 'DAVID VALVERDE SPRITE', 'DIANA NGUYEN', 'ERICA PHAAVONG', 'FAITH BRADY', 'HUNG DANG', 'INES FAGUAS', 'JOANN REITH', 'JOHN WRIGHT', 'JULIE', 'KATRINA HO', 'LISA NAKAMOTO', 'LISA SOROCHAN', 'MARC LEE', 'MARCELO ALVARADO', 'MASAYA KAWAUCHI', 'NATHAN BRADY', 'NIKKI THUY NGUYEN', 'RYAN NGUYEN', 'SANDY LAM', 'SAO TIAN WANT', 'SARA LY', 'SJ AHN', 'STEPHANIE FLORESCA', 'STEVEN CHEN', 'STEVEN CHEN +1', 'TANIA NGUYEN', 'TOMMY CHEN', 'VALARIE ALVARADO', 'VICTORIA NGUYEN', 'JAMES LAM', 'JUSTINE TRAN', 'GUINEVERE JUST', 'JUAN'];
  
        return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('button', {
          className: 'btn btn-primary btn-rounded',
          onClick: this.handleOpen
        }, void 0, 'View Guestlist'), (0, _jsx3.default)(_Dialog2.default, {
          title: 'Confirmed Guestlist',
          actions: actions,
          modal: true,
          open: this.state.open,
          onRequestClose: this.handleClose,
          autoScrollBodyContent: true
        }, void 0, function () {
          return radios.map(function (item, index) {
            return (0, _jsx3.default)('p', {
              style: styles.radioButton
            }, index, index + 1, '. ', item);
          });
        }()));
      }
    }]);
    return GuestList;
  }(_react2.default.Component);
  
  exports.default = GuestList;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

  module.exports = require("material-ui/Dialog");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

  module.exports = require("material-ui/FlatButton");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

  module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

  module.exports = require("material-ui/RadioButton");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _jsx2 = __webpack_require__(5);
  
  var _jsx3 = _interopRequireDefault(_jsx2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _layout = __webpack_require__(54);
  
  var _layout2 = _interopRequireDefault(_layout);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error;
  
      return render((0, _jsx3.default)(_layout2.default, {
        context: context,
        error: error
      }, void 0, (0, _jsx3.default)(_ErrorPage2.default, {
        error: error
      })), error.status || 500);
    }
  };

/***/ }),
/* 114 */
/***/ (function(module, exports) {

  module.exports = require("./assets");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map