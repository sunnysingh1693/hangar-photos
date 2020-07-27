import React, { Component } from "react";
import "./Start.scss";
import { Link } from "@reach/router";
import homeLogo from "../../svg/hangar_logo_large.svg";

class Start extends Component {
  render() {
    return (
      <div id="startWrapper" className="">
        <Link to="/components/Search">
          <img src={homeLogo} alt="hangar_logo_large" className="img-fluid" />
        </Link>
      </div>
    );
  }
}

export default Start;
