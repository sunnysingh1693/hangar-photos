import React from "react";
import "./DescriptionCard.scss";
import facebookLogo from "../../svg/icons8-facebook-f.svg";
import linkedLogo from "../../svg/icons8-linkedin-2.svg";

function DescriptionCard(props) {
  return (
    <div className="descriptionCard-wrapper">
      <div className="descriptionCard row shadow-sm bg-white">
        <div className="row m-0 w-100">
          <div className="col-10 p-0">
            <div className="heading">Image History</div>
          </div>
          <div className="col-2 d-flex justify-content-end p-0">
            <div className="descriptionClose" onClick={props.toggleDescription}>
              &times;
            </div>
          </div>
        </div>
        <p>{props.itemDescription}</p>
        <div className="w-100 d-flex justify-content-end sIconsWrapper">
          <a
            href="https://www.facebook.com/hangarworldwide/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={facebookLogo}
              alt="facebookLogo"
              className="sIcons first"
            />
          </a>
          <a
            href="https://www.linkedin.com/organization-guest/company/hangarworldwide"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedLogo} alt="linkedLogo" className="sIcons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
