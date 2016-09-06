import React from 'react';
import Layout from '../../layout';
import ErrorPage from './ErrorPage';

export default {

  path: '/error',

  action({ render, context, error }) {
    return render(
      <Layout context={context} error={error}>
        <ErrorPage error={error} />
      </Layout>,
      error.status || 500
    );
  },

};
