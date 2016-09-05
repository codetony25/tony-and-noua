import React from 'react';

// Main Layout
import Layout from './layout';

// Child routes
import Home from './views/Home';
import Error from './views/Error';

export default {

  path: '/',

  // Routes are in evaluated order
  children: [
    Home,
    Error
  ],

  async action ({ next, render, context }) {
    const component = await next();

    if (component === 'undefined') {
      return component;
    }

    return render(
      <Layout context={context}>
        {component}
      </Layout>
    );
  }

};
