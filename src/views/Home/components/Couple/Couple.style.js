import { homeColor } from '../../../../styles/Scheme.style';
import color from '../../../../styles/Helpers.style';
import { font, mediaQuery } from '../../../../styles/Variables.style';

import flowersImg from '../../assets/images/flowers-bg.png';

const CoupleStyle = () => {
  const coupleFirstAndSecond = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 536,
      margin: '0 auto',
      textAlign: 'center',

      'img': {
        height: 150,
        borderRadius: '50%'
      }
    }
  };

  return {
    '.couple-container': {
      padding: '99px 30px',
      position: 'relative',

      '.couple-background': {
        backgroundImage: `url(${flowersImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      },

      '.couple-wrapper': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: '0 auto',
        position: 'relative',
        zIndex: 100,

        [mediaQuery.large]: {
          flexDirection: 'row',
          maxWidth: 940
        },

        [mediaQuery.extraLarge]: {
          maxWidth: 1127
        }
      },

      '.couple-first': {
        mixin: coupleFirstAndSecond(),

        [mediaQuery.large]: {
          textAlign: 'right'
        },

        'img': {
          marginLeft: 20,

          [mediaQuery.extraLarge]: {
            height: 220
          }
        }
      },

      '.couple-second': {
        mixin: coupleFirstAndSecond(),

        [mediaQuery.large]: {
          textAlign: 'left'
        },

        'img': {
          marginRight: 20,

          [mediaQuery.extraLarge]: {
            height: 220
          }
        }
      },

      '.couple-description': {

        [mediaQuery.large]: {
          maxWidth: 260,
          minWidth: 260
        },

        'h3': {
          fontSize: 42,
          margin: 0,
          fontWeight: 700,
          fontFamily: font.first,
          color: homeColor.textTheme,
          padding: 10
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
        background: color.rgba(homeColor.bgIconCouple, 0.1),

        [mediaQuery.large]: {
          width: 66,
          height: 66,
          position: 'absolute',
          left: '50%',
          margin: '40px auto 0',
          transform: 'translateX(-50%)'
        },

        [mediaQuery.extraLarge]: {
          width: 88,
          height: 88,
          marginTop: 60
        },

        'i': {
          color: color.rgba(homeColor.iconCouple, .3),

          [mediaQuery.large]: {
            fontSize: 22
          },

          [mediaQuery.extraLarge]: {
            fontSize: 33
          }
        }
      }
    },

    '.couple-countdown': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '60px auto',
      maxWidth: 376,

      '.countdown-box': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        background: homeColor.bgCountdown,
        padding: 10,
        width: 91,
        height: 119,

        'h3': {
          color: homeColor.textCountdown,
          fontFamily: font.second,
          fontSize: 30,
          margin: 0,
          paddingTop: 12
        },

        'p': {
          color: homeColor.textTheme,
          fontFamily: font.second,
          fontSize: 15,
          margin: '12px auto'
        }
      }
    },

    '.couple-rsvp': {
      textAlign: 'center',
      position: 'relative',
      zIndex: 100
    }
  }

};

export default CoupleStyle;
