import { homeColor } from '../../../../styles/Scheme.style';
import color from '../../../../styles/Helpers.style';
import { font, mediaQuery } from '../../../../styles/Variables.style';



const LocationStyle = () => {

  return {
    '.location-container': {
      background: homeColor.bgDark,
      padding: '99px 30px',

      '.location-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        maxWidth: 1167,

        [mediaQuery.large]: {
          justifyContent: 'space-around',
          paddingTop: 100,
          flexDirection: 'row'
        }
      },

      '.location-image': {
        margin: '0 auto',
        maxWidth: '60%',
        minWidth: 210,

        'img': {
          borderRadius: '50%',
          width: '100%',
          padding: '20px 0 40px 0'
        }
      },

      '.location-details': {
        maxWidth: 613,

        [mediaQuery.medium]: {
          margin: '0 auto'
        },

        [mediaQuery.large]: {
          maxWidth: 536,
          paddingLeft: 30
        },

        'h5': {
          margin: 0,
          fontFamily: font.second,
          fontWeight: 400,
          fontSize: 14,
          color: homeColor.textDescriptionDark,
          textTransform: 'uppercase'
        },

        'h2': {
          fontFamily: font.second,
          fontSize: 37,
          fontWeight: 700,
          margin: '26px 0',
          textTransform: 'uppercase',
          color: homeColor.textHeaderLocation
        },

        'p': {
          fontFamily: font.second,
          color: homeColor.textDescriptionDark,
          fontSize: 16,
          fontWeight: 400
        }
      },

      '.location-summary': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 36,

        [mediaQuery.small]: {
          justifyContent: 'space-between'
        },

        [`.summary-first,
          .summary-second,
          .summary-third,
          .summary-fourth
        `]: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 20,
          width: 208
        },

        '.summary-icon': {
          background: homeColor.bgTheme,
          width: 46,
          height: 46,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 17,

          'i': {
            color: homeColor.iconLocation,
            fontSize: 14
          }
        },

        'p': {
          fontWeight: 700
        }

      },

      '.location-rsvp': {
        textAlign: 'center',
        paddingTop: 49,

        [mediaQuery.small]: {
          display: 'inline-block',
          textAlign: 'initial'
        }
      }
    }
  }

};

export default LocationStyle;
