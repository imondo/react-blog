import React, { Component } from 'react';
class MainContent extends Component {
  public render() {
    const { children } = this.props;
    return <div className="main">{children}</div>;
  }
}

export default MainContent;
