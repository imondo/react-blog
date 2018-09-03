import React, { Component } from 'react';
import axios from './../../axios';
import ArticleItem from './ArticleItem';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    }
  }
  async componentWillMount() {
    let list = await axios.get('/api/classes/article?pageSize=9&pageNo=1');
    this.setState({ 
      article: list.results
    });
  }
  render () {
    const { article } = this.state;
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