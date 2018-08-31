import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <ul className="nav">
        <li className="list"><Link to="/archive">归档</Link></li>
        <li className="list"><Link to="/about">关于</Link></li>
      </ul>
    );
  };
}

export default Nav;