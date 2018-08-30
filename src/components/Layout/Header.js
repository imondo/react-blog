import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import Nav from './Nav';
import './Header.less';
const Search = Input.Search;

class Header extends Component {
  render () {
    return (
      <div className="header-cover">
        <Row className="header">
          <Col span={8}>
            Mondo
          </Col>
          <Col span={8}>
            <Nav></Nav>
          </Col>
          <Col span={8}>
            <Search
              placeholder="请输入关键词"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Col>          
        </Row>
      </div>
    )
  }
}

export default Header;