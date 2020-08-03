import React from "react";
import footerLogo from "../svg/hangar_logo_small.svg";
import { FooterWrap, FooterFont } from "../styles/Footer";

const Footer = () => {
  return (
    <FooterWrap className="row justify-content-center">
      <a
        href="https://www.hangarworldwide.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={footerLogo} alt="logo" />
      </a>
      <FooterFont>
        <div>&copy;2020 Hangar Worldwide.</div>
        <div>All Rights Reserved. Privacy Policy</div>
      </FooterFont>
    </FooterWrap>
  );
};

export default Footer;
