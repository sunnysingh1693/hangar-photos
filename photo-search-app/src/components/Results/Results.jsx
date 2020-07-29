import React, { Component } from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import "./Results.scss";

class Results extends Component {
  toggleDescriptionCallback = (id, isClose) => {
    this.props.toggleDescription(id, isClose);
  };

  render() {
    const {
      items,
      // isInActive,
      searchFor,
    } = this.props;
    const searchText = (
      <div>
        search result{items.length > 1 ? "s" : ""} for <em>{searchFor} ...</em>
      </div>
    );
    return (
      <div id="searchResults">
        <div id="searchResultText" className="text-uppercase">
          {searchFor === "" ? "all results" : searchText}
        </div>
        <div className="row justify-content-between imgResultWrap">
          {items.map((item) => (
            <div
              className={`item col-6 col-sm-4 ${
                item.isDescription === false ? "inActive" : ""
              } ${item.isDescription === true ? "active" : ""}`}
              key={item.id}
              data-itemkey={item.id}
              onClick={() => this.toggleDescriptionCallback(item.id)}
            >
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + item.image}
                alt={item.title}
              />
              {item.isDescription && (
                <div className="fadeIn">
                  <div style={{ position: "absolute", left: 0 }}>
                    <DescriptionCard
                      onClick={() =>
                        this.toggleDescriptionCallback(item.id, true)
                      }
                      itemDescription={item.description}
                    />
                  </div>
                  <div id="dummy-descriptionCard">
                    <DescriptionCard itemDescription={item.description} />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div
            className="item col-6 col-sm-4"
            style={{ cursor: "auto", pointerEvents: "none" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Results;
