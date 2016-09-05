import { footerColor } from '../../styles/Scheme.style';
import color from '../../styles/Helpers.style';
import { font, mediaQuery } from '../../styles/Variables.style';

const FooterLayoutStyle = () => {

  return {
    '.footer-container': {
      background: footerColor.bg,
      padding: '99px 30px',

      '.footer-thanks': {
        textAlign: 'center',
        paddingBottom: 49
      },

      '.footer-names': {
        textAlign: 'center',

        'h1': {
          fontFamily: font.first,
          fontWeight: 700,
          margin: 0,
          fontSize: 82,
          color: footerColor.textName,

          [mediaQuery.medium]: {
            fontSize: 'calc( 30px + (82 - 30) * ( (100vw - 400px) / ( 800 - 400) ))'
          },

          'span': {
            display: 'block',
            fontSize: 'calc( 30px + (40 - 30) * ( (100vw - 400px) / ( 800 - 400) ))',
            fontFamily: font.first,
            fontWeight: 700,

            [mediaQuery.small]: {
              display: 'initial'
            }
          }
        }
      },

      '.footer-divider': {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        margin: '50px auto',
        width: 268,

        'i': {
          color: footerColor.icon,
          fontSize: 43
        }
      },

      '.footer-phone-number': {
        width: 270,
        margin: '0 auto',

        [mediaQuery.small]: {
          width: 357
        },

        'p': {
          margin: 0,
          display: 'flex',
          fontFamily: font.second,
          fontSize: 21,
          color: footerColor.textPhone,
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      },

      '.footer-social': {
        padding: '68px 0',
        width: 171,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
      },

      '.footer-copyright': {

        'p': {
          textAlign: 'center',
          color: footerColor.textCopyright,
          fontFamily: font.second,
          fontSize: 14,
          fontWeight: 400
        },

        'a': {
          transition: '.3s',
          fontFamily: font.second,
          fontSize: 14,
          fontWeight: 700,
          color: footerColor.link,

          ':hover': {
            color: color.lighten(footerColor.link, 5)
          }
        }
      }
    }
  }

};

export default FooterLayoutStyle;
