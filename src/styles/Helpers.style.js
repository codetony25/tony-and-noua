import tinycolor from 'tinycolor2';

const darken = (hexColor, percentage) => {
  return tinycolor(hexColor).darken(percentage).toHexString();
};

const lighten = (hexColor, percentage) => {
  return tinycolor(hexColor).lighten(percentage).toHexString();
};

const rgb = (hexColor) => {
  return tinycolor(hexColor).toRgbString();
};

const rgba = (hexColor, percentage) => {
  return tinycolor(hexColor).setAlpha(percentage).toString();
};

export default {
  darken,
  lighten,
  rgb,
  rgba
}
