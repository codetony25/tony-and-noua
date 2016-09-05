import { homeColor } from '../../../styles/Scheme.style';
import { font, mediaQuery } from '../../../styles/Variables.style';

import flowersImg from '../assets/images/flowers-bg.png';

const CoupleStyle = () => {
  return {
    '.couple-container': {
      paddingTop: 99,

      '.couple-background': {
        backgroundImage: `url(${flowersImg})`,
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '50%'
      }
    }
  }

};

export default CoupleStyle;
