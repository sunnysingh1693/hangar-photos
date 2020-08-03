import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Footer from "./Footer";
import Results from "./Results";
import Input from "./Input";
import noresults from "../svg/noresults.png";
import goBack from "../svg/arrow.svg";
import {
  SearchWrapper,
  ContentWrapper,
  GoBack,
  Loader,
} from "../styles/Search";
// import useFetch from "./GetData";

const Search = () => {
  let [error, setError] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [items, setItems] = useState([]);
  let baseUrl = "http://localhost:4001/items";
  let [searchQuery, setSearchQuery] = useState("");
  // let [itemDescription, setItemDescription] = useState("");
  let [searchFor, setSearchFor] = useState("");

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: [],
  //     baseUrl: "http://localhost:4001/items",
  //     searchQuery: "",
  //     itemDescription: "",
  //     searchFor: "",
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const getData = (searchQuery) => {
    console.log("Requesting API...");
    fetch(searchQuery)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.map((item) => ({ ...item, isDescription: null })));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getData(baseUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchFor(searchQuery);
    let searchUrl = `${baseUrl}?q=${encodeURI(searchQuery)}`;

    getData(searchUrl);
  };

  let prevId = "";
  const toggleDescription = (id, isClose) => {
    // Resetting states on close
    console.log(prevId);
    if (isClose || id === prevId) {
      prevId = "";
      setItems(
        items.map((item) => ({
          ...item,
          isDescription: null,
        }))
      );
      return false;
    }
    prevId = id;

    const localItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDescription: !item.isDescription };
      } else {
        return { ...item, isDescription: false };
      }
    });

    setItems(localItems);
  };

  // const { error, isLoaded, items, searchQuery, searchFor } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Loader>
        <img
          src="https://tinyurl.com/y633wao2"
          alt="loading ..."
          className="img-fluid"
        />
      </Loader>
    );
  } else {
    return (
      <SearchWrapper className="row justify-content-center">
        <ContentWrapper>
          <Link to={process.env.PUBLIC_URL + "/"}>
            <GoBack>
              <img src={goBack} alt="" />
            </GoBack>
          </Link>
          <Input
            handleSubmitProp={handleSubmit}
            handleChangeProp={handleChange}
            searchQuery={searchQuery}
          />
          {items.length === 0 ? (
            <Loader>
              <img src={noresults} alt="loading ..." className="img-fluid" />
            </Loader>
          ) : (
            <Results
              searchFor={searchFor}
              items={items}
              toggleDescriptionResultProp={toggleDescription}
            />
          )}
          <Footer />
        </ContentWrapper>
      </SearchWrapper>
    );
  }
};

export default Search;
