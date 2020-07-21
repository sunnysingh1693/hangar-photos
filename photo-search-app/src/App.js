import React, { Component } from 'react';
import { Router } from '@reach/router'
import Search from "./components/Search";
import Start from "./components/Start";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Start path="/" />
          <Search path="/components/Search" />
        </Router>
      </div>
    );
  }
}

export default App;