import React, { Component } from 'react';
import axios from './../../axios';
import ArticleItem from './ArticleItem';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      pageNo: 1,
      count: 0
    }
  }
  
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
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }

  render () {
    const { article } = this.state;
    console.log(article)
    return (
      <div className="index"> 
        { article.map((val) => {
            return (<ArticleItem article = { val } key={val.id}/>);
          })
        }
      </div>
    );
  }
}

export default Home;