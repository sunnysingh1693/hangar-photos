import React, { Component } from "react";
import "./Search.scss";
import Footer from "./Footer";
import facebookLogo from "../svg/icons8-facebook-f.svg";
import linkedLogo from "../svg/icons8-linkedin-2.svg";

class Search extends Component {
  itemDescription;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      baseUrl: "http://localhost:4001/items",
      searchQuery: "",
      isDescription: false,
      itemDescription: "",
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
            items: result,
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

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchUrl = `${this.state.baseUrl}?q=${encodeURI(
      this.state.searchQuery
    )}`;
    console.log(searchUrl);
    this.getData(searchUrl);
  }

  toggleDescription = () => {
    this.setState({
      isDescription: !this.state.isDescription,
    });
  };

  showDescription = (event) => {
    let selectedItemKey = event.currentTarget.dataset.itemkey;
    // eslint-disable-next-line array-callback-return
    let selectedItem = this.state.items.filter((item) => {
      if (item.id === selectedItemKey) {
        // console.log(item.description);
        return item;
      }
    });
    // console.log(selectedItem[0].description);

    // console.log(this.itemDescription);
    this.toggleDescription();
    this.setState({
      itemDescription: selectedItem[0].description,
      isDescription: !this.state.isDescription,
    });
  };

  render() {
    console.log("rendered");
    const {
      error,
      isLoaded,
      items,
      searchQuery,
      itemDescription,
      isDescription,
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div
          id="searchWrapper"
          className="row justify-content-center overflow-auto"
        >
          <div className="contentWrapper">
            <form onSubmit={this.handleSubmit} className="row">
              <label htmlFor="searchPhotos">
                <h2 id="searchLabel">Search</h2>
                <input
                  type="search"
                  name="searchPhotos"
                  id="searchPhotos"
                  placeholder="Photos ..."
                  autoFocus
                  value={searchQuery}
                  onChange={this.handleChange}
                />
              </label>
            </form>
            <div id="searchResultText" className="text-uppercase">
              all results
            </div>
            <div className="row justify-content-between">
              {items.map((item) => (
                <div
                  className="item col-6 col-sm-4"
                  key={item.id}
                  data-itemkey={item.id}
                  onClick={this.showDescription}
                >
                  <img
                    className="img-fluid"
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.title}
                  />
                  {isDescription && (
                    <div className="descriptionCard-wrapper">
                      <div className="descriptionCard row shadow-sm bg-white">
                        <div className="col-10 p-0">
                          <div className="heading">Image History</div>
                        </div>
                        <div className="col-2 d-flex justify-content-end p-0">
                          <div
                            className="descriptionClose"
                            onClick={this.toggleDescription}
                          >
                            &times;
                          </div>
                        </div>
                        <p>{itemDescription}</p>
                        <div className="w-100 d-flex justify-content-end">
                          <div className="">
                            <a
                              href="https://www.facebook.com/hangarworldwide/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <img src={facebookLogo} alt="facebookLogo" />
                            </a>
                            <a
                              href="https://www.linkedin.com/organization-guest/company/hangarworldwide?challengeId=AQGF9sD5proM3wAAAXN4KdmC0R95_wftCb870Dp6jYDi3T_N_2Akb4xbrJCv3Ob5tL-1tXnxpf6ttUyf8QSfIcPVHlHdySGXUA&submissionId=ced91c7f-4c2c-2416-6b1b-67589a2f6b4a"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <img src={linkedLogo} alt="linkedLogo" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Footer></Footer>
          </div>
        </div>
      );
    }
  }
}
export default Search;
