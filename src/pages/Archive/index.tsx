import React, { Component } from 'react';
import ArchiveItem from './ArchiveItem';
import { Timeline } from 'antd';
import axios from '../../axios';
import { timeSub } from '../../utils';
import { IArticle } from './../../interfaces/artilce';

interface IList {
  results: any[];
  count: number;
}

export interface IArchiveList {
  time: string;
  list: IArticle[];
}

class Archive extends Component<any, any> {
  public state = {
    list: []
  };
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    this.getList();
  }

  public getList() {
    axios.get('/api/classes/article').then((response: IList) => {
      const { results } = response;
      this.getArchiveList(results).then((res: IArchiveList[]) => {
        this.setState({ list: res });
      });
    });
  }

  public async getArchiveList(data: IArticle[]) {
    const list: IArchiveList[] = data.reduce(
      (arr: IArchiveList[], val: IArticle) => {
        const obj: IArchiveList = { time: timeSub(val.createAt, 7), list: [] };
        const hasObjIndex: number = arr.findIndex(
          (v: IArchiveList) => v.time === timeSub(val.createAt, 7)
        );
        if (hasObjIndex > -1) {
          arr[hasObjIndex].list.push(val);
        } else {
          obj.list.push(val);
          arr.push(obj);
        }
        return arr;
      },
      []
    );
    return list;
  }

  public render() {
    const { list } = this.state;
    return (
      <div className="archive-cover">
        <Timeline>
          {list.map((v: IArchiveList) => {
            return (
              <Timeline.Item key={v.time}>
                <ArchiveItem data={v} />
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    );
  }
}

export default Archive;
