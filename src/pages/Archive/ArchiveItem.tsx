import React, { Component } from 'react';
import Item from './Item';
import { Row } from 'antd';
import { IArchiveList } from './index';

class ArchiveItem extends Component<{ data: IArchiveList }> {
  public render() {
    const { data } = this.props;
    return (
      <div className="archive-item">
        <span className="common-title">{data.time}</span>
        <div className="post-lists">
          <Row>
            {data.list.map(val => {
              return <Item data={val} key={val.id} />;
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default ArchiveItem;
