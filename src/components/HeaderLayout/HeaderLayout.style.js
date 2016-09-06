import { headerColor } from '../../styles/Scheme.style';
import { font, mediaQuery } from '../../styles/Variables.style';
import color from '../../styles/Helpers.style';

const HeaderLayoutStyle = (options) => {

  return {
    '.header-container': {
      transition: '.5s',
      position: 'fixed',
      display: 'flex',
      width: '100%',
      margin: '0 auto',
      zIndex: 200,
      background: headerColor.bg,
      boxShadow: '15px 15px 45px -20px rgba(0,0,0,0.75)',

      [mediaQuery.large]: {
        display: 'inline-block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: options.isScrollHeightReached ? 0 : 3,
        maxWidth: options.isScrollHeightReached ? '100%' : 960,
        margin: options.isScrollHeightReached ? '0 auto' : '30px auto'
      },

      [mediaQuery.extraLarge]: {
        maxWidth: options.isScrollHeightReached ? '100%' : 1149
      },

      'nav': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: options.isScrollHeightReached ? 0 : 3,
        padding: '15px',
        background: headerColor.bg,

        [mediaQuery.medium]: {
          padding: '15px 40px'
        },

        '.header-logo': {
          'h3': {
            margin: 0,
            textAlign: 'center',
            color: headerColor.textLogo,
            fontFamily: font.first,
            fontSize: 23
          }
        },

        '.header-navigation': {
          margin: 0,
          display: 'none',

          [mediaQuery.large]: {
            display: 'flex'
          },

          'a': {
            transition: '.3s',
            color: headerColor.link,
            fontFamily: font.third,
            fontSize: 14,
            fontWeight: 400,
            marginRight: 30,

            ':hover': {
              color: headerColor.linkHover
            }
          }
        },

        '.more-navigation': {
          display: 'flex',
          position: 'relative',
          top: 2,

          'a': {
            transition: '.4s',
            color: headerColor.link,

            ':hover': {
              color: headerColor.linkHover
            }
          },

          'i': {
            fontSize: 27
          },

          [mediaQuery.large]: {
            display: 'none'
          }
        },

        '.mobile-navigation': {
          transition: '.4s',
          position: 'absolute',
          background: headerColor.bg,
          width: '100%',
          top: 0,
          left: 0,
          zIndex: -50,
          fontSize: 32,
          transform: options.isMobileNavigationTapped ? 'translateY(21%)' : 'translateY(-100%)',
          boxShadow: '15px 15px 45px -20px rgba(0,0,0,0.75)',

          [mediaQuery.large]: {
            display: 'none'
          },

          'a': {
            padding: 15,
            borderTop: `1px solid ${headerColor.border}`,
            background: headerColor.bg,
            display: 'block',
            transition: '.3s',
            color: headerColor.link,

            ':hover': {
              background: color.darken(headerColor.bg, 5),
              color: headerColor.linkHover
            },

            ':active': {
              background: color.darken(headerColor.bg, 5),
              color: headerColor.linkHover
            }
          },

          '.mobile-overlay': {
            display: options.isMobileNavigationTapped ? 'block' : 'none',
            height: '100vh',
            width: '100%',
            position: 'absolute',
            background: options.isMobileNavigationTapped ? color.rgba('#000', .4) : 'transparent'
          }
        }
      }
    }
  }
};

export default HeaderLayoutStyle;
