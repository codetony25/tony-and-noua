/*! normalize.css v4.1.1 */

const NormalizeStyle = () => {

	return {
		/**
		 * 1. Change the default font family in all browsers (opinionated).
		 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
		 */
		'html': {
			fontFamily: 'sans-serif',
			MsTextSizeAdjust: '100%',
			WebkitTextSizeAdjust: '100%'
		},

		/**
		 * Remove the margin in all browsers (opinionated).
		 */
		'body': {
			margin: 0
		},

		/*====== HTML5 display definitions ======*/

		/**
		 * Add the correct display in IE 9-.
		 * 1. Add the correct display in Edge, IE, and Firefox.
		 * 2. Add the correct display in IE.
		 */
		[`article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		main,
		menu,
		nav,
		section,
		summary`]: {
			display: 'block'
		},

		/**
		 * Add the correct display in IE 9-.
		 */
		[`audio,
		canvas,
		progress,
		video`]: {
			display: 'inline-block'
		},

		/**
		 * Add the correct display in iOS 4-7.
		 */
		'audio:not([controls])': {
			display: 'none',
			height: 0
		},

		/**
		 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
		 */
		'process': {
			verticalAlign: 'baseline'
		},

		/**
		 * Add the correct display in IE 10-.
		 * 1. Add the correct display in IE.
		 */
		'template, [hidden]': {
			display: 'none'
		},

		/*====== Links ======*/

		/**
		 * 1. Remove the gray background on active links in IE 10.
		 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
		 */
		'a': {
			backgroundColor: 'transparent',
			WebkitTextDecorationScript: 'objects'
		},

		/**
		 * Remove the outline on focused links when they are also active or hovered
		 * in all browsers (opinionated).
		 */
		'a:active, a:hover': {
			outlineWidth: 0
		},

		/*====== Text-level semantics ======*/

		/**
		 * 1. Remove the bottom border in Firefox 39-.
		 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
		 */

		'abbr[title]': {
			borderBottom: 'none',
			// TODO ADD text-decoration: underline dotted
			textDecoration: 'underline',
		},

		/**
		 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
		 */
		'b, strong': {
			// TODO ADD font-weight: inherit;

			/**
			 * Add the correct font weight in Chrome, Edge, and Safari.
			 */
			fontWeight: 'bolder'
		},

		/**
		 * Add the correct font style in Android 4.3-.
		 */
		'dfn': {
			fontStyle: 'italic'
		},

		/**
		 * Correct the font size and margin on `h1` elements within `section` and
		 * `article` contexts in Chrome, Firefox, and Safari.
		 */
		'h1': {
			fontSize: '2em',
			margin: '0.67em 0'
		},

		/**
		 * Add the correct background and color in IE 9-.
		 */
		'mark': {
			backgroundColor: '#ff0',
			color: '#000'
		},

		/**
		 * Add the correct font size in all browsers.
		 */
		'small': {
			fontSize: '80%'
		},

		/**
		 * Prevent `sub` and `sup` elements from affecting the line height in
		 * all browsers.
		 */
		'sub': {
			bottom: '-0.25'
		},

		'sup': {
			top: '-0.5em'
		},

		/*====== Embedded content ======*/

		/**
		 * Remove the border on images inside links in IE 10-.
		 */
		'img': {
			borderStyle: 'none'
		},

		/**
		 * Hide the overflow in IE.
		 */
		'svg:not(:root)': {
			overflow: 'hidden'
		},

		/*====== Grouping content ======*/

		/**
		 * 1. Correct the inheritance and scaling of font size in all browsers.
		 * 2. Correct the odd `em` font sizing in all browsers.
		 */
		'code, kbd, pre, samp': {
			fontFamily: 'monospace, monospace',
			fontSize: '1em'
		},

		/**
		 * Add the correct margin in IE 8.
		 */
		'figuare': {
			margin: '1em 40px'
		},

		/**
		 * 1. Add the correct box sizing in Firefox.
		 * 2. Show the overflow in Edge and IE.
		 */
		'hr': {
			boxSizing:'content-box',
			height: 0,
			overflow: 'visible'
		},

		/*====== Forms ======*/

		/**
		 * 1. Change font properties to `inherit` in all browsers (opinionated).
		 * 2. Remove the margin in Firefox and Safari.
		 */
		'button, input, select, textarea': {
			font: 'inherit',
			margin: 0
		},

		/**
		 * Restore the font weight unset by the previous rule.
		 */
		'optgroup': {
			fontWeight: 'bold'
		},

		/**
		 * Show the overflow in IE.
		 * 1. Show the overflow in Edge.
		 */
		'button, input': {
			overflow: 'visible'
		},

		/**
		 * Remove the inheritance of text transform in Edge, Firefox, and IE.
		 * 1. Remove the inheritance of text transform in Firefox.
		 */
		'button, select': {
			textTranform: 'none'
		},

		/**
		 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
		 *    controls in Android 4.
		 * 2. Correct the inability to style clickable types in iOS and Safari.
		 */
		'button, html [type="button"], [type="reset"], [type="submit"]': {
			WebkitAppearance: 'button'
		},

		/**
		 * Remove the inner border and padding in Firefox.
		 */
		[`button::-moz-focus-inner,
		[type="button"]::-moz-focus-inner,
		[type="reset"]::-moz-focus-inner,
		[type="submit"]::-moz-focus-inner`]: {
			borderStyle: 'none',
			padding: 0
		},

		/**
		 * Restore the focus styles unset by the previous rule.
		 */
		[`button:-moz-focusring,
		[type="button"]:-moz-focusring,
		[type="reset"]:-moz-focusring,
		[type="submit"]:-moz-focusring`]: {
			outline: '1px dotted ButtonText'
		},

		/**
		 * Change the border, margin, and padding in all browsers (opinionated).
		 */
		'fieldset': {
			border: '1px solid #c0c0c0',
			margin: '0 2px',
			padding: '0.35em 0.625em 0.75em'
		},

		/**
		 * 1. Correct the text wrapping in Edge and IE.
		 * 2. Correct the color inheritance from `fieldset` elements in IE.
		 * 3. Remove the padding so developers are not caught out when they zero out
		 *    `fieldset` elements in all browsers.
		 */
		'legend': {
			boxSizing: 'border-box',
			color: 'inherit',
			display: 'table',
			maxWidth: '100%',
			padding: 0,
			whiteSpace: 'normal'
		},

		/**
		 * Remove the default vertical scrollbar in IE.
		 */
		'textarea': {
			overflow: 'auto'
		},

		/**
		 * 1. Add the correct box sizing in IE 10-.
		 * 2. Remove the padding in IE 10-.
		 */
		'[type="checkbox"], [type="radio"]': {
			boxSizing: 'border-box',
			padding: 0
		},

		/**
		 * Correct the cursor style of increment and decrement buttons in Chrome.
		 */
		[`[type="number"]::-webkit-inner-spin-button,
			[type="number"]::-webkit-outer-spin-button`]: {
			height: 'auto'
		},

		/**
		 * 1. Correct the odd appearance in Chrome and Safari.
		 * 2. Correct the outline style in Safari.
		 */
		'[type="search"]': {
			WebkitAppearance: 'textfield',
			outlineOffset: -2
		},

		/**
		 * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
		 */
		[`[type="search"]::-webkit-search-cancel-button,
			[type="search"]::-webkit-search-decoration`]: {
			WebkitAppearance: 'none'
		},

		/**
		 * Correct the text style of placeholders in Chrome, Edge, and Safari.
		 */
		'::-webkit-input-placeholder': {
			color: 'inherit',
			opacity: 0.54
		},

		/**
		 * 1. Correct the inability to style clickable types in iOS and Safari.
		 * 2. Change font properties to `inherit` in Safari.
		 */
		'::-webkit-file-upload-button': {
			WebkitAppearance: 'button',
			font: 'inherit'
		}
	}
};

export default NormalizeStyle;
