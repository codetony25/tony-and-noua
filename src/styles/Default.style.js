const DefaultStyle = () => {

	return {
		'html': {
			boxSizing: 'border-box',
			height: '100%'
		},

		'body': {
			margin: 0,
			padding: 0,
			minHeight: '100%',
			position: 'relative',
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
			textRendering: 'optimizeLegibility'
		},

		'*, *::before, *::after': {
			boxSizing: 'inherit',
      outline: 0
		},

    'h1, h2, h3, h4, h5, h6, a, span, p, div, li, button': {
		  fontFamily: 'Open Sans'
    },

		'a': {
			textDecoration: 'none',
			cursor: 'pointer'
		},

		'ul, ol': {
			listStyle: 'none',
			padding: 0,
			margin: 0
		}
	}
};

export default DefaultStyle;
