import * as React from 'react';
import axios from '../../axios';
import ArticleItem from './ArticleItem';
import { Prompt } from 'react-router-dom';

interface IHomeState {
  article: any[];
  pageNo: number;
  count: number;
}

interface IList {
  results: any[];
  count: number;
}

class Home extends React.Component<{}, IHomeState, any> {
  public element: HTMLElement;
  public state: IHomeState = {
    article: [],
    pageNo: 1,
    count: 0
  };

  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillMount() {
    this.getList();
  }

  public handleScroll = () => {
    const body: HTMLElement = document.body;
    if (document.documentElement) {
      const scrollTop = document.documentElement.scrollTop || body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const isBottom = scrollHeight - (scrollTop + clientHeight);
      const hasNoMore = this.state.article.length < this.state.count;
      if (hasNoMore && scrollTop && !isBottom) {
        this.getList();
      }
    }
  };

  public getList() {
    axios
      .get(`/api/classes/article?pageSize=10&pageNo=${this.state.pageNo}`)
      .then((res: IList) => {
        const { results = [], count = 0 } = res;
        const article = [...this.state.article, ...results];
        let pageNo = this.state.pageNo;
        pageNo++;
        this.setState({ article, pageNo, count });
      });
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public render() {
    const { article } = this.state;
    return (
      <div className="index">
        <Prompt
          // tslint:disable-next-line:jsx-no-lambda
          message={(location: any): boolean =>
            location.pathname.includes('/demo') ? false : true
          }
        />
        {article.map(val => {
          return <ArticleItem article={val} key={val.id} />;
        })}
      </div>
    );
  }
}

export default Home;
