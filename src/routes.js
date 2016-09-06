import React from 'react';
import Layout from './layout';

// Child routes
import home from './views/Home';
import error from './views/error';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,

    // place new routes before...
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <Layout context={context}>{component}</Layout>
    );
  },

};
