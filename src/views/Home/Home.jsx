import React from 'react';

import HomeState from './Home.state';

import Hero from './Hero';
import Couple from './Couple';

class Home extends React.Component {

  static displayName = 'Home';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <Hero />
        <Couple />
        <h1>More Things</h1>
        <h1>Even More THings</h1>
        <h1>Even More THings</h1>
        <h1>Even More THings</h1>
        <h1>Even More THings</h1>
        <h1>Even More THings</h1>
      </div>
    );
  }

}

export default Home;
