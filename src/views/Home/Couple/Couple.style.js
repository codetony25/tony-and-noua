import { homeColor } from '../../../styles/Scheme.style';
import color from '../../../styles/Helpers.style';
import { font, mediaQuery } from '../../../styles/Variables.style';

import flowersImg from '../assets/images/flowers-bg.png';

const CoupleStyle = () => {
  return {
    '.couple-container': {
      padding: '99px 30px 15px 30px',

      '.couple-background': {
        backgroundImage: `url(${flowersImg})`,
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '50%'
      },

      '.couple-wrapper': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
      },

      '.couple-first, .couple-second': {
        display: 'flex',
        alignItems: 'center',

        'img': {
          height: 150,
          padding: 10,
          borderRadius: '50%',

          [mediaQuery.large]: {
            height: 210
          }
        }
      },

      '.couple-description': {
        'h3': {
          fontSize: 42,
          margin: 0,
          fontWeight: 700,
          fontFamily: font.first,
          color: homeColor.textTheme
        },

        'p': {
          color: homeColor.textDescription,
          fontFamily: font.second,
          fontSize: 15,
          fontWeight: 400
        }
      },

      '.couple-divider': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '45px auto',
        borderRadius: '50%',
        width: 44,
        height: 44,
        // width: 88,
        // height: 88,
        background: color.rgba(homeColor.bgIconCouple, .1),

        'i': {
          color: color.rgba(homeColor.iconCouple, .3)
        }
      }
    }
  }

};

export default CoupleStyle;
