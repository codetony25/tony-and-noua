import React from 'react';
import { Style } from 'jassy';

import TitleBlockState from './TitleBlock.state'

import swirlLeftImg from '../../public/assets/images/swirl-left.png';
import swirlRightImg from '../../public/assets/images/swirl-right.png';

class TitleBlock extends React.Component {

  static displayName = 'TitleBlock';

  render () {
    return(
      <div className="title-block-container">
        <Style rules={TitleBlockState.styles} />
        <div className="title-block-header">
          <h5>{this.props.section}</h5>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
        <div className="title-block-divider">
          <img src={swirlLeftImg} alt=""/>
          <div className="title-block-icon">
            <i className="fa fa-heart" />
          </div>
          <img src={swirlRightImg} alt=""/>
        </div>
      </div>
    );
  }

}

export default TitleBlock;
