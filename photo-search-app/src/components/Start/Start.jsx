import React, { Component } from "react";
import "./Start.scss";
import { Link } from "@reach/router";
import homeLogo from "../../svg/hangar_logo_large.svg";

class Start extends Component {
  render() {
    // let startWrapperBgCss = {
    //   background: `url('${
    //     process.env.PUBLIC_URL + "/"
    //   }images/bgs/bg-start.jpg') no-repeat`,
    //   backgroundSize: "80%",
    //   backgroundPositionX: "left",
    //   backgroundPositionY: "bottom",
    // };
    return (
      <div
        id="startWrapper"
        // style={startWrapperBgCss}
      >
        <Link to="/components/Search">
          <img src={homeLogo} alt="hangar_logo_large" className="img-fluid" />
        </Link>
      </div>
    );
  }
}

export default Start;
