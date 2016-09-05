import React from 'react';
import { Style } from 'jassy';

import CoupleState from './Couple.state'

class Couple extends React.Component {

  static displayName = 'Couple';

  render () {
    return(
      <div className="couple-container">
        <Style rules={CoupleState.styles} />
        <div className="couple-background" />
        <div className="couple-wrapper">
          <div className="couple-first">
            <h3>Tony Nguyen</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet assumenda, at beatae doloremque facere id impedit mollitia nisi nobis nostrum nulla odit perspiciatis possimus quasi quis, repellat voluptate voluptatibus.</p>
          </div>
          <div className="couple-image">

          </div>
          <div className="couple-second">
            <h3>Noua Vue</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex hic iure iusto, maiores necessitatibus obcaecati quo reprehenderit sed soluta vitae. A at aut enim facere illo ipsum provident sed velit.</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Couple;
