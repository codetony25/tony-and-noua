import { observable } from 'mobx';

import HeaderLayoutStyle from './HeaderLayout.style';

class HeaderLayoutState {

  @observable styles = HeaderLayoutStyle({
    isScrollHeightReached: false,
    isMobileNavigationTapped: false
  });

  constructor () {
    this.minScrollHeight = 76;
    this.isMobileNavigationShown = false;
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
        isScrollHeightReached: true,
        isMobileNavigationTapped: false
      });
    }
    else if (window.scrollY < this.minScrollHeight) {
      this.styles = HeaderLayoutStyle({
        isScrollHeightReached: false,
        isMobileNavigationTapped: false
      });
    }
  };

  onMobileNavigationClick = (event) => {
    event.preventDefault();

    this.handleToggleMobileNavigation();
  };

  onMobileLinkClick = (event) => {
    event.preventDefault();

    this.handleToggleMobileNavigation();
  };

  onMobileOverlayClick = (event) => {
    event.preventDefault();

    this.handleToggleMobileNavigation();
  };

  handleToggleMobileNavigation = () => {
    this.isMobileNavigationShown = !this.isMobileNavigationShown;
    this.styles = HeaderLayoutStyle({
      isScrollHeightReached: false,
      isMobileNavigationTapped: this.isMobileNavigationShown
    });
  };

}

export default new HeaderLayoutState();
