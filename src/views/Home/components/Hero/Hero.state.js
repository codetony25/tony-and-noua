import { observable } from 'mobx';

import HeroStyle from './Hero.style';

class HeroState {

  @observable styles = HeroStyle();

}

export default new HeroState();
