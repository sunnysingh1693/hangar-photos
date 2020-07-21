import React, { Component } from 'react';
import './Start.scss';
import { Link } from '@reach/router'

class Start extends Component {
  render() {
    return (
      <div>
        <Link to="/components/Search">
          <button>Go to Search!</button>
        </Link>
      </div>
    );
  }
}

export default Start;