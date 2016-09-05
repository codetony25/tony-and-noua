import { observable } from 'mobx';

import GlobalStyle from '../styles/Global.style';
import DefaultStyle from '../styles/Default.style';
import NormalizeStyle from '../styles/Normalize.style';
import FontStyle from '../styles/Font.style';
import FormStyle from '../styles/Form.style';
import ButtonStyle from '../styles/Button.style';

class GlobalState {

	@observable styles = Object.assign(
		{},
		FontStyle(),
		NormalizeStyle(),
		DefaultStyle(),
		GlobalStyle(),
		FormStyle(),
		ButtonStyle()
	);

}

export default new GlobalState();
