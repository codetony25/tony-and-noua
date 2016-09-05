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
import Html from './html';
import { ErrorPage } from './views/Error/ErrorPage';
import errorPageStyle from './views/Error/ErrorPage.css';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import passport from './core/passport';
import models from './data/models';
import schema from './data/schema';
import routes from './routes';
import assets from './assets';
import { port, auth } from './config';

const app = express();

/**
 * Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
 * user agent is not known.
 */
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

// Register Node.js middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication
app.use(expressJwt({
  secret: auth.jwt.secret,
  credentialsRequired: false,
  getToken: request => request.cookies.id_token,
}));
app.use(passport.initialize());

app.get('/login/facebook',
  passport.authenticate(
    'facebook',
    { scope: ['email', 'user_location'], session: false }
  )
);
app.get('/login/facebook/return',
  passport.authenticate(
    'facebook',
    { failureRedirect: '/login', session: false }
  ),
  (request, response) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(request.user, auth.jwt.secret, { expiresIn });
    response.cookie(
      'id_token',
      token,
      { maxAge: 1000 * expiresIn, httpOnly: true }
    );
    response.redirect('/');
  }
);

// Register API middleware
app.use('/graphql', expressGraphQL(request => ({
  schema,
  graphiql: true,
  rootValue: { request },
  pretty: process.env.NODE_ENV !== 'production'
})));

// Register server-side rendering middleware
app.get('*', async (request, response, next) => {
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
      path: request.path,
      query: request.query,
      context: {
        insertCss: (...styles) => {
          styles.forEach(style => css.add(style._getCss()));
        },
        setTitle: value => data.title = value,
        setMeta: (key, value) => data[key] = value,
      },
      render (component, status = statusCode) {
        css = new Set();
        statusCode = status;

        data.children = ReactDOM.renderToString(component);
        data.style = [...css].join('');

        return true;
      }
    });

    const html = ReactDOM.renderToStaticMarkup(
      <Html {...data} />
    );

    response.status(statusCode);
    response.send(`<!doctype html>${html}`);
  }
  catch (error) {
    return next(error);
  }
});

// Error Handling
const prettyError = new PrettyError();
const statusCodeServerError = 500;
prettyError.skipNodeFiles();
prettyError.skipPackage('express');

app.use((error, request, response, next) => {
  console.log(prettyError.render(error));
  const statusCode = error.status || statusCodeServerError;
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={error.message}
      style={errorPageStyle._getCss()}
    >
      {ReactDOM.renderToString(<ErrorPage error={error} />)}
    </Html>
  );

  response.status(statusCode);
  response.send(`<!doctype html>${html}`);
});

// Launch the server
models.sync().catch(error => console.error(error.stack))
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is running at http://localhost:${port}/`);
    });
  });

