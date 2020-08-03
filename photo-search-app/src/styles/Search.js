/* Search page styles */
import styled from "styled-components";
import searchBg from "../bgs/bg-home.jpg";

export const SearchWrapper = styled.div`
  font-family: "Aileron";
  padding: 0 0 0 10px;
  background: url(${searchBg}) no-repeat;
  background-size: auto;
  background-position-x: right;
  background-position-y: bottom;
  height: 100vh;
  overflow: auto;

  & .row{
    margin-right: 0;
    margin-left: 0;
  }
`;

let contentWrapperWidth = `340px`;
export const ContentWrapper = styled.div`
  width: ${contentWrapperWidth};
  position: relative;
`;

export const GoBack = styled.div`
    width: 25px;
    transform: rotate(180deg);
    margin: 28px auto;
`;

export const Loader = styled.div`
  width: 300px;
  margin: auto;
`;

export const DummyDescriptionCard = styled.div`
  width: ${contentWrapperWidth};
  visibility: hidden;

  @media (max-width: 576px) {
    width: 210%;
  }
`;