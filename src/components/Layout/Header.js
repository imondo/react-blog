import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Input, Icon } from 'antd';
import Nav from './Nav';

const Search = Input.Search;

class Header extends Component {
  render () {
    return (
      <div className="header-cover">
        <Row className="header">
          <Col span={8}>
            <a className="icon" href="https://github.com/one-pupil">
              <i className="icon-fa-github icon"></i>            
            </a>
            <a className="icon" href="https://imondo.cn/docs">
              <Icon type="medium" theme="outlined" />
            </a>
          </Col>
          <Col span={8} className="text-center">
            <Link to="/" className="logo">Mondo</Link>
          </Col>
          <Col span={8} className="text-rt">
            <Search
              placeholder="请输入关键词"
              onSearch={this.handleSearch}
              style={{ width: 200 }}
            /> 
          </Col>             
        </Row>
        <Row className="nav">
          <Col span={24} className="text-center">
            <Nav></Nav>
          </Col>
        </Row>
      </div>
    )
  }

  handleSearch = async (value) => {
    this.props.history.push({pathname: '/search', search: `?keyword=${value}`, query: { keyword: value }});
  }
}

export default withRouter(Header);