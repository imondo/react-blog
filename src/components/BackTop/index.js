import React, { Component } from 'react';
import { Icon } from 'antd'
import './index.less';

class BackTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <div className={this.state.visible ? `back-top` : `hidden`} onClick={this.scrollToTop}>
        <Icon type="caret-up" theme="outlined" />
      </div>
    );
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({
      visible: (scrollTop > 400),
    });
  }

  componentDidMount() {
    this.scrollEvent = window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

export default BackTop;