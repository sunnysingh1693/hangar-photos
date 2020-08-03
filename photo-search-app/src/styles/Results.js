/* Results page styles */
import styled, { keyframes } from "styled-components";

export const SearchResults = styled.div`
`;

export const SearchResultText = styled.div`
  font-weight: bold;
  padding-bottom: 15px;
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
`;

export const Item = styled.div`
  padding: 0 10px 10px 0;
  cursor: pointer;
  position: unset;

  &.inActive {
    opacity: 0.1;

    &:hover {
      opacity: 0.7;
    }

    img:hover {
      border: 1px solid black;
    }
  }

  &.active {
    z-index: 9;
    opacity: 1;
    pointer-events: unset;
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const RealDescriptionCard = styled.div`
  position: absolute;
  left: 0;
  -webkit-animation-name: ${fadeInAnimation};
  animation-name: ${fadeInAnimation};
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;
