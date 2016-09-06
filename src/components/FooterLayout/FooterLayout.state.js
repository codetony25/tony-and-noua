import { observable } from 'mobx';

import FooterLayoutStyle from './FooterLayout.style';

class FooterLayout {

  @observable styles = FooterLayoutStyle();

}

export default new FooterLayout();
