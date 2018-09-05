import React, { Component } from 'react';
import nprogress from 'nprogress';
import Header from './Header';
import MainContent from './Main'
import { BackTop } from 'antd';
import './index.less';
class Layout extends Component {
  componentWillMount () {
    nprogress.start()
  }

  componentDidMount () {
    nprogress.done()
  }

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