import { homeColor } from '../../styles/Scheme.style';
import color from '../../styles/Helpers.style';
import { font, mediaQuery } from '../../styles/Variables.style';

const TitleBlockStyle = () => {

  return {
    '.title-block-container': {
      textAlign: 'center',

      '.title-block-header': {
        'h5': {
          fontSize: 14,
          fontFamily: font.second,
          fontWeight: 700,
          color: homeColor.textDescriptionDark,
          textTransform: 'uppercase',
          margin: 0
        },

        'h3': {
          fontFamily: font.first,
          fontSize: 58,
          fontWeight: 700,
          color: homeColor.textTheme,
          margin: 0,
          padding: '28px 0'
        },

        'p': {
          maxWidth: 734,
          margin: '0 auto',
          color: homeColor.textDescriptionDark,
          fontSize: 16,
          fontWeight: 400,
          fontFamily: font.second
        }
      },

      '.title-block-divider': {
        padding: '40px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 211,
        margin: '0 auto',

        '.title-block-icon': {
          width: 25,
          height: 25,
          border: `1px solid ${homeColor.borderCircle}`,
          borderRadius: '50%',
          position: 'relative',
          bottom: 4
        },

        'i': {
          color: homeColor.iconTitle,
          verticalAlign: 'middle',
          fontSize: 10,
          position: 'relative',
          top: 1.5
        }
      }
    }
  }

};

export default TitleBlockStyle;
