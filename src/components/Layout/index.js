import React, { Component } from 'react';
import Header from './Header';
import MainContent from './Main'
import { BackTop } from 'antd';
import './index.less';
class Layout extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <MainContent/>
        <BackTop>
          <div className="back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}

export default Layout;