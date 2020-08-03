/* Input component styles */
import styled from "styled-components";

export const Form = styled.form`
  padding: 0 10px 35px 0;
`;

export const Label = styled.label`
  width: 100%;
  margin: 0;
`;

export const SearchLabel = styled.h2`
  font-weight: bold;
  padding-bottom: 15px;
  font-size: 24px;
  line-height: 133.3%;
  letter-spacing: 0.02em;
  margin: 0;
  padding-bottom: 16px;
`;

export const SearchInput = styled.input`
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border: 2px solid black;
  font-size: 13px;
  padding: 10px;
  width: 100%;
  height: 52px;
  padding: 18px 18px 17px 17px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.73);
  &:focus {
    outline: none;
  }
`;
