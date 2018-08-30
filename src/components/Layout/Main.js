import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import routeConfig from './../../router';

import Home from './../../pages/Home';
import About from './../../pages/About';
import Archive from './../../pages/Archive';
class MainContent extends Component {
  render () {
    return (
      <div className="main">
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/archive" component={Archive}></Route>
        </Switch>
      </div>
    );
  }
}

export default MainContent;