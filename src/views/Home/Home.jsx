import React from 'react';

import HomeState from './Home.state';

import Hero from './components/Hero';
import Couple from './components/Couple';
import Location from './components/Location';

class Home extends React.Component {

  static displayName = 'Home';

  render() {
    return (
      <div className="home-container">
        <Hero />
        <Couple />
        <Location />
      </div>
    );
  }

}

export default Home;
