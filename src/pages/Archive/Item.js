import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { timeSub } from './../../utils';

class Item extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="item">
        <Link className="item-body" to={{pathname: `/detail/${data.id}`}}>
          <p className="item-title"> { data.title } </p>
          <p className="item-meta">
            发布于 { timeSub(data.createAt) }
          </p>
        </Link>
      </div>
    );
  }
}

export default Item;