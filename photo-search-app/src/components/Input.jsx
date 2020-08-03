import React from "react";
import { SearchInput, SearchLabel, Label, Form } from "../styles/Input";

const Input = (props) => {
  // const handleSubmitCallback = (event) => {
  //   props.handleSubmit(event);
  // };

  // const handleChangeCallback = (event) => {
  //   props.handleChange(event);
  // };

  return (
    <Form onSubmit={props.handleSubmitProp} className="row bg-white">
      <Label htmlFor="searchInput">
        <SearchLabel>Search</SearchLabel>
        <SearchInput
          type="search"
          name="searchInput"
          id="searchInput"
          placeholder="Photos ..."
          autoFocus
          required
          value={props.searchQuery}
          onChange={props.handleChangeProp}
        />
      </Label>
    </Form>
  );
};

export default Input;
