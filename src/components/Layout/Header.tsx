import * as React from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import { Row, Col, Input, Icon } from 'antd';
import Nav from './Nav';

interface IHistory {
  pathname: string;
  search?: string;
  query?: object;
}

const Search = Input.Search;

class Header extends React.Component<RouteComponentProps<any>, any> {
  public render() {
    return (
      <div className="header-cover">
        <Row className="header">
          <Col span={8}>
            <a className="icon" href="https://github.com/one-pupil">
              <i className="icon-fa-github icon" />
            </a>
            <a className="icon" href="https://imondo.cn/docs">
              <Icon type="medium" />
            </a>
          </Col>
          <Col span={8} className="text-center">
            <Link to="/" className="logo">
              Mondo
            </Link>
          </Col>
          <Col span={8} className="text-rt sm-hidden">
            <Search
              placeholder="请输入关键词"
              onSearch={this.handleSearch}
              style={{ width: 200 }}
            />
          </Col>
        </Row>
        <Row className="nav">
          <Col span={24} className="text-center">
            <Nav />
          </Col>
        </Row>
      </div>
    );
  }

  public handleSearch = (value: string) => {
    const val: string = value;
    if (val) {
      const route: IHistory = {
        pathname: '/search',
        search: `?keyword=${val}`,
        query: { keyword: val }
      };
      this.props.history.push(route);
    } else {
      this.props.history.push({ pathname: '/' });
    }
  };
}

export default withRouter<any>(Header);
