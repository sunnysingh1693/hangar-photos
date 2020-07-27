import React, { Component } from "react";
import "./Input.scss";

class Input extends Component {
  handleSubmitCallback = (event) => {
    this.props.onSubmit(event);
  };

  handleChangeCallback = (event) => {
    this.props.onChange(event);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitCallback} className="row bg-white">
        <label htmlFor="searchInput">
          <h2 id="searchLabel">Search</h2>
          <input
            type="search"
            name="searchInput"
            id="searchInput"
            placeholder="Photos ..."
            autoFocus
            required
            value={this.props.searchQuery}
            onChange={this.handleChangeCallback}
          />
        </label>
      </form>
    );
  }
}

export default Input;
