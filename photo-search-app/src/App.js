import React, { Component } from 'react';
import { Router } from '@reach/router'
import Search from "./components/Search/Search";
import Start from "./components/Start/Start";

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Router>
          <Start path="/" />
          <Search path="/components/Search" />
        </Router>
      </div>
    );
  }
}

export default App;