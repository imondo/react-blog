import React, { Component } from 'react';
import axios from './../../axios';
import ArticleList from './ArticleItem';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    }
  }
  componentWillMount() {
    axios.get('/api/classes/article?pageSize=9&pageNo=1')
    .then(res => {
      this.setState({ 
        article: res.results
      });
    })
  }
  render () {
    const { article } = this.state;
    return (
      <div className="index"> 
        { article.map((val) => {
            return (<ArticleList article = { val } key={val.id}/>);
          })
        }
      </div>
    );
  }
}

export default Home;