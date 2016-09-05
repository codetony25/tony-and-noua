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
    document.body.addEventListener('click', this.handleBodyClick);
  };

  removeWindow = () => {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.removeEventListener('click', this.handleBodyClick);
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

  handleBodyClick = (event) => {
    console.log('here');
    event.preventDefault();

    if (isMobileNavigationShown) {
      this.handleToggleMobileNavigation();
    }
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
