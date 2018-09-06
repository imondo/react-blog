import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';
import './index.less';
class About extends Component {

  componentWillMount() {
    var a=1,b={};
    b.v=1;
    var a1=a,b1=b;
    a1=2;
    b1.v=2;
    console.log(a, b);
  }

  render () {
    return (
      <div className="avatar-cover">
        <img src={require('./../../assets/images/avatar.png')} alt="头像" />
        <Tooltip placement="right" title={568197478}>
          <Icon type="qq" theme="outlined" />
        </Tooltip>
        <div className="profile">
          <p className="motto">生活已然尽兴，何必畏首畏尾。</p>
          <p>这是个利用react实现的简单博客。</p>
        </div>
      </div>
    );
  }
}

export default About;