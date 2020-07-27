import React, { Component } from "react";
import footerLogo from "../svg/hangar_logo_small.svg";

class Footer extends Component {
  render() {
    let fontStyle = {
      fontSize: "12px",
      lineHeight: "15px",
      marginLeft: "20px",
      color: "#565656",
    };
    return (
      <div className="row justify-content-center pt-5 pb-5">
        <a
          href="https://www.hangarworldwide.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={footerLogo} alt="" />
        </a>
        <div style={fontStyle}>
          <div>&copy;2020 Hangar Worldwide.</div>
          <div>All Rights Reserved. Privacy Polivy</div>
        </div>
      </div>
    );
  }
}

export default Footer;
