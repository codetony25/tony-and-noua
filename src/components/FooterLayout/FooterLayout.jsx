import React from "react";
import { Style } from "jassy";

import FooterLayoutState from "./FooterLayout.state";

class FooterLayout extends React.Component {
  static displayName = "FooterLayout";

  render() {
    return (
      <footer className="footer-container">
        <Style rules={FooterLayoutState.styles} />
        <div className="footer-thanks">
          <img src="/assets/images/thank-you.png" alt="" />
        </div>
        <div className="footer-names">
          <h1>
            Tony <span>&</span> Noua
          </h1>
        </div>
        <div className="footer-divider">
          <img src="/assets/images/swirl-left-white.png" alt="" />
          <div className="divider-icon">
            <i className="fa fa-heart" />
          </div>
          <img src="/assets/images/swirl-right-white.png" alt="" />
        </div>
        <div className="footer-social">
          <a href="mailto:codetony25@gmail.com">
            <button className="btn btn-social">
              <i className="fa fa-envelope" />
            </button>
          </a>
          <a href="https://www.facebook.com/events/1007958975989198/">
            <button className="btn btn-social">
              <i className="fa fa-facebook" />
            </button>
          </a>
          <a href="https://www.instagram.com/tonynguyen25/">
            <button className="btn btn-social">
              <i className="fa fa-instagram" />
            </button>
          </a>
          <a href="https://plus.google.com/u/0/112784934391162470946">
            <button className="btn btn-social">
              <i className="fa fa-google-plus" />
            </button>
          </a>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright All Rights Reserved 2019 - <a href="#">Tony Tai Nguyen</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterLayout;
