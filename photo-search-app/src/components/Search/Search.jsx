import React, { Component } from "react";
import "./Search.scss";
import { Link } from "@reach/router";
import Footer from "../Footer/Footer";
import Results from "../Results/Results";
import Input from "../Input/Input";
import noresults from "../../svg/noresults.png";
import goBack from "../../svg/arrow.svg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      baseUrl: "http://localhost:4001/items",
      searchQuery: "",
      itemDescription: "",
      searchFor: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData(searchQuery) {
    console.log("Requesting API...");
    fetch(searchQuery)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.map((item) => ({ ...item, isDescription: null })),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getData(this.state.baseUrl);
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ searchFor: this.state.searchQuery });
    let searchUrl = `${this.state.baseUrl}?q=${encodeURI(
      this.state.searchQuery
    )}`;

    this.getData(searchUrl);
  };

  prevId = "";
  toggleDescription = (id, isClose) => {
    // Resetting states on close
    if (isClose || id === this.prevId) {
      this.prevId = "";
      this.setState({
        items: this.state.items.map((item) => ({
          ...item,
          isDescription: null,
        })),
      });
      return false;
    }
    this.prevId = id;

    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return { ...item, isDescription: !item.isDescription };
      } else {
        return { ...item, isDescription: false };
      }
    });

    this.setState({
      items: items,
    });
  };

  render() {
    const { error, isLoaded, items, searchQuery, searchFor } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div id="loader">
          <img
            src="https://tinyurl.com/y633wao2"
            alt="loading ..."
            className="img-fluid"
          />
        </div>
      );
    } else {
      return (
        <div id="searchWrapper" className="row justify-content-center m-0">
          <div className="contentWrapper">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <div id="goBack">
                <img src={goBack} alt="" />
              </div>
            </Link>
            <Input
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              searchQuery={searchQuery}
            />
            {items.length === 0 ? (
              <div id="loader">
                <img src={noresults} alt="loading ..." className="img-fluid" />
              </div>
            ) : (
              <Results
                searchFor={searchFor}
                items={items}
                toggleDescription={this.toggleDescription}
              />
            )}
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Search;
