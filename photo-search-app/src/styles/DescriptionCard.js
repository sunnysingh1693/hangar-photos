/* DescriptionCard component styles */
import styled from "styled-components";

export const DescriptionCardWrapper = styled.div`
  cursor: auto;
  padding: 0 10px 0 0;
  left: 0px;

  @media (max-width: 576px) {
    padding: 10px 10px 0 0;
  }

  @media screen and (max-width: 576px) and (min-width: 476px) {
    padding: 10px 10px 0 0;
  }
`;

export const DescriptionCardStyled = styled.div`
  padding: 14px 10px 10px 15px;
`;

export const Heading = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 133.3%;
  letter-spacing: 0.02em;
  padding-bottom: 10px;
`;

export const Ptag = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0.04em;
  color: #000000;
  padding: 0 40px 30px 0;
  margin: 0;
`;

const square = (value) => {
  return (`
    width: ${value}px;
    height: ${value}px;
  `);
}

export const DescriptionClose = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  ${square(20)};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 136%;
  letter-spacing: 0.02em;
`;

export const SocailIconsWrapper = styled.div`
  ${square(15)};
  line-height: 0;
  .sIcons {
    &.first {
      ${square(12)};
    }
    ${square(13)};
  }
`;
