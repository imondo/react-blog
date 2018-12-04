import React, { Component } from 'react';
import Item from '../Archive/Item';
import axios from '../../axios';
import { IArticle } from './../../interfaces/artilce';

interface IState {
  classify: string;
  list: IArticle[];
  isSearch: boolean;
}

class Classify extends Component<any, IState> {
  public state: IState = {
    classify: '',
    list: [],
    isSearch: false
  };

  constructor(props: any) {
    super(props);
  }

  public componentWillReceiveProps(nextProps: any) {
    this.getAllData(); // 视图重新渲染
  }

  public componentDidMount() {
    this.getAllData();
  }

  public getAllData() {
    const {
      history: {
        location: { search, pathname }
      }
    } = this.props;
    const key = this.getKey(search);
    const data = this.getKeyVal(search, key);
    const isSearch = pathname.includes('/search');
    this.setState({ classify: decodeURI(data), isSearch });
    this.getList(data);
  }

  public getKey(data: string) {
    const key = data.slice(data.indexOf('?') + 1, data.indexOf('='));
    return key;
  }

  public getKeyVal(data: string, key = '') {
    const keyVal = key;
    const num = keyVal.length;
    const index = data.indexOf(`${keyVal}=`) + num + 1;
    return data.slice(index);
  }

  public async getList(data: string) {
    const isSearch = this.props.location.pathname.includes('/search');
    const url = isSearch
      ? `/api/classes/article?keyword=${data}`
      : `/api/classes/classify?classify=${data}`;
    axios.get(url).then((res: IArticle[]) => {
      this.setState({ list: res });
    });
  }

  public render() {
    const { classify, list, isSearch } = this.state;
    return (
      <div className="classify-cover">
        <h2 className="common-title">
          {' '}
          {isSearch ? '搜索' : '分类'} ：{classify}
        </h2>
        <div className="archive-item">
          {list.map(v => {
            return <Item data={v} key={v.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Classify;
