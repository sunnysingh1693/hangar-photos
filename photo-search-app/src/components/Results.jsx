import React, { Fragment } from "react";
import DescriptionCard from "./DescriptionCard";
import {
  SearchResults,
  SearchResultText,
  Item,
  RealDescriptionCard,
} from "../styles/Results";
import { DummyDescriptionCard } from "../styles/Search";

const Results = (props) => {
  const { items, searchFor, toggleDescriptionResultProp } = props;

  // const toggleDescriptionCallback = (id, isClose) => {
  //   console.log(isClose);
  //   toggleDescription(id, isClose);
  // };

  const searchText = (
    <div>
      search result{items.length > 1 ? "s" : ""} for <em>{searchFor} ...</em>
    </div>
  );

  return (
    <SearchResults>
      <SearchResultText className="text-uppercase">
        {searchFor === "" ? "all results" : searchText}
      </SearchResultText>
      <div className="row">
        {items.map((item) => (
          <Item
            className={`col-6 col-sm-4 ${
              item.isDescription === false ? "inActive" : ""
            } ${item.isDescription === true ? "active" : ""}`}
            key={item.id}
            onClick={() => toggleDescriptionResultProp(item.id)}
          >
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + item.image}
              alt={item.title}
            />
            {item.isDescription && (
              <Fragment>
                <RealDescriptionCard>
                  <DescriptionCard
                    id={item.id}
                    toggleDescriptionCardProp={toggleDescriptionResultProp}
                    itemDescription={item.description}
                  />
                </RealDescriptionCard>
                <DummyDescriptionCard>
                  <DescriptionCard itemDescription={item.description} />
                </DummyDescriptionCard>
              </Fragment>
            )}
          </Item>
        ))}
      </div>
    </SearchResults>
  );
};

export default Results;
