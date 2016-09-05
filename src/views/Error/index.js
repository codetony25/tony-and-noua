import React from 'react';
import Layout from '../../layout';
import ErrorPage from './ErrorPage';

export default {

  path: '/error',

  action ({ render, context, error }) {
    const statusCodeServerError = 500;

    return render(
      <Layout context={context} error={error}>
        <ErrorPage error={error} />
      </Layout>,
      error.status || statusCodeServerError
    );
  }

};
