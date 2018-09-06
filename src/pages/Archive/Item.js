import React, { Component } from 'react';
import { Col } from 'antd'
import { Link } from 'react-router-dom';
import { timeSub } from './../../utils';

class Item extends Component {
  render() {
    let { data } = this.props;
    return (
      <Col xs={24} sm={12} md={8} className="item">
        <Link className="item-body" to={{pathname: `/detail/${data.id}`}}>
          <p className="item-title"> { data.title } </p>
          <p className="item-meta">
            发布于 { timeSub(data.createAt) }
          </p>
        </Link>
      </Col>
    );
  }
}

export default Item;