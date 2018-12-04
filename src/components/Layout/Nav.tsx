import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  public render() {
    return (
      <ul className="nav-list">
        <li className="list">
          <NavLink exact={true} to="/" activeClassName="active">
            首页
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/archive" activeClassName="active">
            归档
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/about" activeClassName="active">
            关于
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
