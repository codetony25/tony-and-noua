import { headerColor } from '../../styles/Scheme.style';
import { font, mediaQuery } from '../../styles/Variables.style';

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
        padding: '15px 40px',

        '.header-logo': {
          'h3': {
            margin: 0,
            textAlign: 'center',
            color: headerColor.textLogo,
            fontFamily: font.first,
            fontSize: 23
          }
        },

        'ul': {
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
        }
      }
    }
  }
};

export default HeaderLayoutStyle;
