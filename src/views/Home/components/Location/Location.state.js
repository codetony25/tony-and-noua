import { observable } from 'mobx';

import LocationStyle from './Location.style';

class Location {

  @observable styles = LocationStyle();

}

export default new Location();
