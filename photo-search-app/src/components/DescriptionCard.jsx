import React from "react";
import facebookLogo from "../svg/icons8-facebook-f.svg";
import linkedLogo from "../svg/icons8-linkedin-2.svg";
import {
  DescriptionCardWrapper,
  DescriptionCardStyled,
  Heading,
  Ptag,
  DescriptionClose,
  SocailIconsWrapper,
} from "../styles/DescriptionCard";

const DescriptionCard = (props) => {
  // console.log(`DescriptionCard ${props}`);
  return (
    <DescriptionCardWrapper>
      <DescriptionCardStyled className="row shadow-sm bg-white">
        <div className="row m-0 w-100">
          <div className="col-10 p-0">
            <Heading>Image History</Heading>
          </div>
          <div className="col-2 d-flex justify-content-end p-0">
            <DescriptionClose
              onClick={() => props.toggleDescriptionCardProp(props.id, true)}
            >
              &times;
            </DescriptionClose>
          </div>
        </div>
        <Ptag>{props.itemDescription}</Ptag>
        <SocailIconsWrapper className="w-100 d-flex justify-content-end">
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
        </SocailIconsWrapper>
      </DescriptionCardStyled>
    </DescriptionCardWrapper>
  );
};

export default DescriptionCard;
