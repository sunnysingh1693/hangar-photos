/* Start page styles */
import styled from "styled-components";
import startBg from "../bgs/bg-start.jpg";

export const StartWrapper = styled.div`
  height: 100vh;
  background: url(${startBg}) no-repeat;
  background-size: 80%;
  background-position-x: left;
  background-position-y: bottom;
`;

export const Img = styled.img`
  display: block;
  margin: auto;
  position: relative;
  top: 15rem;
`;
