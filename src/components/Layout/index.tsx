import * as React from 'react';
import * as nprogress from 'nprogress';
import Header from './Header';
import MainContent from './Main';
import { BackTop } from 'antd';
import './index.less';
class Layout extends React.Component<{}, {}, any> {
  public componentWillMount() {
    nprogress.start();
  }

  public componentDidMount() {
    nprogress.done();
  }

  public render() {
    const { children } = this.props;
    return (
      <div className="layout-wrapper">
        <Header />
        <MainContent children={children} />
        <BackTop>
          <div className="back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}

export default Layout;