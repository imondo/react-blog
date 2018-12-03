import React, { Component } from 'react';
import Item from './../Archive/Item';
import axios from './../../axios';

class Classify extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classify: '',
      list: [],
      isSearch: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getAllData(); // 视图重新渲染
  }

  componentDidMount() {
    this.getAllData();    
  }

  getAllData() {
    let { history: { location: { search, pathname } } } = this.props;
    let key = this.getKey(search);
    let data = this.getKeyVal(search, key);
    let isSearch = pathname.includes('/search');
    this.setState({ classify: decodeURI(data), isSearch });
    this.getList(data, key);
  }

  getKey(data) {
    let key = data.slice(data.indexOf('?') + 1, data.indexOf('='));
    return key;
  }

  getKeyVal(data, key) {
    let keyVal = key || '';
    let num = keyVal.length;
    let index = data.indexOf(`${keyVal}=`) + num + 1;
    return data.slice(index);
  }

  async getList(data, key) {
    let isSearch = this.props.location.pathname.includes('/search');
    let url = isSearch ?  `/api/classes/article?keyword=${data}` : `/api/classes/classify?classify=${data}`;
    let list = await axios.get(url);
    this.setState({ list });
  }

  render() {
    let { classify, list, isSearch } = this.state;
    return (
      <div className="classify-cover">
        <h2 className="common-title"> { isSearch ? '搜索' : '分类' } ：{ classify }</h2>
        <div className="archive-item">
          {
            list.map(v => {
              return <Item data={v} key={v.id}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Classify;