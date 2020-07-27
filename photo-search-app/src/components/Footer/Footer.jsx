import React, { Component } from "react";
import "./Footer.scss";
import footerLogo from "../../svg/hangar_logo_small.svg";

class Footer extends Component {
  render() {
    return (
      <div className="row justify-content-center footerWrap">
        <a
          href="https://www.hangarworldwide.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={footerLogo} alt="" />
        </a>
        <div className="fontFooter">
          <div>&copy;2020 Hangar Worldwide.</div>
          <div>All Rights Reserved. Privacy Policy</div>
        </div>
      </div>
    );
  }
}

export default Footer;
