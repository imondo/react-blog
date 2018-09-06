import React, { Component } from 'react';
import Item from './Item';
import { Timeline, Row } from 'antd';
import axios from './../../axios';
import { timeSub } from './../../utils';

class ArchiveItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="archive-item">
        <span className="common-title">{ data.time }</span>
        <div className="post-lists">
          <Row>
            { 
              data.list.map(val => {            
                return <Item data={val} key={val.id}/>;
              })
            }
          </Row>
        </div>
      </div>
    );
  }
}

class Archive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    let { results } = await axios.get('/api/classes/article');    
    let list = await this.getArchiveList(results);
    this.setState({ list });
  }

  async getArchiveList(data) {
    let list = data.reduce((arr, val) => {
      let obj = { time: timeSub(val.createAt, 7), list: [] };   
      if (arr.findIndex(v => v.time === timeSub(val.createAt, 7)) > -1) {
        let hasObj = arr.find(v => v.time === timeSub(val.createAt, 7));
        hasObj.list.push(val);
      } else {
        obj.list.push(val);
        arr.push(obj);
      }
      return arr;
    }, []);
    return list;
  }

  render () {
    let { list } = this.state;
    return (
      <div className="archive-cover">
        <Timeline>
          { list.map(v => {
            return (
              <Timeline.Item key={v.time}>
                <ArchiveItem data={v} />
              </Timeline.Item>
            );
          }) }
        </Timeline>
                
      </div>
    );
  }
}

export default Archive;