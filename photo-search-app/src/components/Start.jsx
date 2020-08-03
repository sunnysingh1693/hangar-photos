import React from "react";
import { Link } from "@reach/router";
import homeLogo from "../svg/hangar_logo_large.svg";
import { StartWrapper, Img } from "../styles/Start";

const Start = () => {
  return (
    <StartWrapper>
      <Link to="/components/Search">
        <Img src={homeLogo} alt="hangar_logo_large" className="img-fluid" />
      </Link>
    </StartWrapper>
  );
};

export default Start;
