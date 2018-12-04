import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';

class BackTop extends Component {
  public element: HTMLElement;
  public state = {
    visible: false
  };
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  public render() {
    return (
      <div
        className={this.state.visible ? `back-top` : `hidden`}
        onClick={this.scrollToTop}
      >
        <Icon type="caret-up" />
      </div>
    );
  }

  public handleScroll = () => {
    const scrollTop = this.element.scrollTop || document.body.scrollTop;
    this.setState({
      visible: scrollTop > 400
    });
  };

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    if (this.handleScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  public scrollToTop() {
    window.scrollTo(0, 0);
  }
}

export default BackTop;
