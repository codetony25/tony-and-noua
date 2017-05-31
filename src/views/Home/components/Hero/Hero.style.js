import { homeColor } from '../../../../styles/Scheme.style';
import { font, mediaQuery } from '../../../../styles/Variables.style';

const HeroStyle = () => {
  return {
    '.hero-container': {
      position: 'relative',
      background: `url(/assets/views/Home/proposal.gif) center center no-repeat`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 60,
      alignItems: 'center',

      ':after': {
        background: 'linear-gradient(-45deg, #ffffff 16px, transparent 0), linear-gradient(45deg, #ffffff 16px, transparent 0)',
        backgroundPosition: 'left-bottom',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '32px 32px',
        content: '" "',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 32
      },

      '.hero-overlay': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: homeColor.bgHero,
        opacity: 0.4,
        left: 0,
        top: 0
      },

      '.hero-main': {
        position: 'relative',
        zIndex: 100
      },

      '.hero-title': {
        textAlign: 'center',

        'h1': {
          fontFamily: font.first,
          fontWeight: 700,
          margin: 0,
          fontSize: 82,
          color: homeColor.textHeaderHero,
          textShadow: `5px 5px 20px ${homeColor.textShadow}`,

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

      '.hero-divider': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '55px 0',
        margin: '0 auto',
        width: 268,

        'i': {
          color: homeColor.bgIconHero,
          fontSize: 28
        }
      },

      '.hero-date-wrapper': {
        textAlign: 'center',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 472,
        justifyContent: 'center',


        [mediaQuery.medium]: {
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        },

        'img': {
          width: 109,
          margin: '0 auto'
        },

        '.hero-date': {
          margin: '30px 0',

          [mediaQuery.medium]: {
            margin: '0'
          }
        },

        'h4': {
          fontFamily: font.third,
          fontSize: 16,
          fontStyle: 'italic',
          fontWeight: 700,
          margin: 0,
          paddingBottom: 18,
          color: homeColor.textHero,
          textShadow: `5px 5px 20px ${homeColor.textShadow}`
        },

        'h2': {
          margin: 0,
          color: homeColor.textHero,
          fontFamily: font.second,
          textShadow: `5px 5px 20px ${homeColor.textShadow}`
        }
      }
    }
  }

};

export default HeroStyle;
