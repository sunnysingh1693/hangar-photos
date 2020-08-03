import React, { Component } from 'react';
import { Router } from '@reach/router'
import Search from "./components/Search";
import Start from "./components/Start";

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Router>
          <Start path={process.env.PUBLIC_URL + '/'} />
          <Search path="/components/Search" />
        </Router>
      </div>
    );
  }
}

export default App;