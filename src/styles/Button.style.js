import color from './Helpers.style';
import { globalColor } from './Scheme.style';
import { font } from './Variables.style';

const buttonStyle = () => {

	return {
    '.btn': {
      width: 202,
      height: 60,
      fontFamily: font.second,
      fontSize: 15,
      fontWeight: 700,
      textTransform: 'uppercase',
      border: 0,
      borderRadius: 5,
      cursor: 'pointer',

      '&.btn-primary': {
        transition: '.3s',
        background: globalColor.bgBtnPrimary,
        color: globalColor.textBtnPrimary,

        ':hover': {
          background: color.lighten(globalColor.bgBtnPrimary, 5)
        },

        ':active': {
          background: color.darken(globalColor.bgBtnPrimary, 5)
        }
      },

      '&.btn-secondary': {
        transition: '.3s',
        background: globalColor.bgBtnSecondary,
        color: globalColor.textBtnSecondary,

        ':hover': {
          background: color.lighten(globalColor.bgBtnSecondary, 5)
        },

        ':active': {
          background: color.darken(globalColor.bgBtnSecondary, 5)
        }
      },

      '&.btn-social': {
        width: 42,
        height: 38,
        transition: '0.3s',
        background: globalColor.bgBtnSocial,

        'i': {
          transition: '0.3s',
          color: globalColor.iconSocial
        },

        ':hover': {
          background: globalColor.bgBtnSocialHover,

          'i': {
            color: globalColor.iconSocialHover
          }
        }
      },

      '&.btn-rounded': {
        borderRadius: 32
      }
    }
	}
};

export default buttonStyle;
