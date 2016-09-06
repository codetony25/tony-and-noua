import { observable } from 'mobx';

import TitleBlockStyle from './TitleBlock.style';

class TitleBlock {

  @observable styles = TitleBlockStyle();

}

export default new TitleBlock;
