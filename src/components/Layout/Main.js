import React, { Component } from 'react';
import routeConfig from './../../router';

class MainContent extends Component {  
  render () {
    return (
      <div className="main">
        { routeConfig }
      </div>
    );
  }
}

export default MainContent;