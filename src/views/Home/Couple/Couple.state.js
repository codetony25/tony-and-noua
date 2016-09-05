import { observable } from 'mobx';

import CoupleStyle from './Couple.style';

class CoupleState {

  @observable styles = CoupleStyle();

}

export default new CoupleState();
