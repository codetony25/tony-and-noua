import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import { analytics } from './config';
import { ErrorPageWithoutStyle } from './views/error/ErrorPage';
import errorPageStyle from './views/error/ErrorPage.css';
import passport from './core/passport';
import models from './data/models';
import schema from './data/schema';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, auth, host } from './config';

const app = express();

function Html({ title, description, style, script, children }) {
  return (
    <html className="no-js" lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/assets/favicons/manifest.json" />
      <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="stylesheet" href="/assets/css/fontawesome.css" />
      <link rel="stylesheet" href="/assets/css/linearicons.css" />
      <link
        href="//fonts.googleapis.com/css?family=Dancing+Script:400,700|Droid+Serif:400,700|Roboto:400,700"
        rel="stylesheet"
      />
      <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body>
    <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
    {script && <script src={script} />}
    {analytics.google.trackingId &&
    <script
      dangerouslySetInnerHTML={{ __html:
      'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
      `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://plugins.eventable.com/eventable.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script', 'eventable-script');` }}
    />
    }
    {analytics.google.trackingId &&
    <script src="https://www.google-analytics.com/analytics.js" async defer />
    }
    </body>
    </html>
  );
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
  secret: auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));
app.use(passport.initialize());

app.get('/login/facebook',
  passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
);
app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  }
);

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: process.env.NODE_ENV !== 'production',
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    let css = new Set();
    let statusCode = 200;
    const data = {
      title: 'Tony and Noua\'s Wedding Event',
      description: 'RSVP to join our wedding event with Tony and Noua!',
      style: '',
      script: assets.main.js,
      children: ''
    };

    await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
      context: {
        insertCss: (...styles) => {
          styles.forEach(style => css.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
        },
        setTitle: value => (data.title = value),
        setMeta: (key, value) => (data[key] = value),
      },
      render(component, status = 200) {
        css = new Set();
        statusCode = status;
        data.children = ReactDOM.renderToString(component);
        data.style = [...css].join('');
        return true;
      },
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(statusCode);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const statusCode = err.status || 500;
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  );
  res.status(statusCode);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
models.sync().catch(err => console.error(err.stack)).then(() => {
	app.listen(port, '0.0.0.0', () => {
		console.log(`The server is running at http://localhost:${port}/ or ${host}`);
	});
});
/* eslint-enable no-console */
