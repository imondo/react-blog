import React, { Component } from 'react';
import axios from './../../axios';
import ArticleItem from './ArticleItem';
import { Prompt } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      pageNo: 1,
      count: 0
    }
  }

  scrollEvent = () => {}
  
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const isBottom = (scrollHeight - (scrollTop + clientHeight));
    let hasNoMore = this.state.article.length < this.state.count;
    if (hasNoMore && scrollTop && !isBottom) {
      this.getList();
    }
  }

  componentDidMount() {
    this.scrollEvent = window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  } 

  componentWillMount() {
    this.getList();
  }

  async getList() {
    let list = await axios.get(`/api/classes/article?pageSize=10&pageNo=${this.state.pageNo}`);
    let article = [...this.state.article, ...list.results];
    let pageNo = this.state.pageNo;
    pageNo++;
    this.setState({ article, pageNo, count: list.count });   
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);    
  }

  render () {
    const { article } = this.state;
    return (
      <div className="index"> 
        <Prompt message={ location => {
          return location.pathname.includes('/demo') ? false : true;
        }}/>
        { article.map((val) => {
            return (<ArticleItem article = { val } key={val.id}/>);
          })
        }
      </div>
    );
  }
}

export default Home;