import { observable } from 'mobx';

import HeaderLayoutStyle from './HeaderLayout.style';

class HeaderLayoutState {

  @observable styles = HeaderLayoutStyle({
    isScrollHeightReached: false
  });

  constructor () {
    this.minScrollHeight = 76;
  }

  attachWindow = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  removeWindow = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY > this.minScrollHeight) {
      this.styles = HeaderLayoutStyle({
        isScrollHeightReached: true
      });
    }
    else if (window.scrollY < this.minScrollHeight) {
      this.styles = HeaderLayoutStyle({
        isScrollHeightReached: false
      });
    }
  };

}

export default new HeaderLayoutState();
