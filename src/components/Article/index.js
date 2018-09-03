import React, { Component } from 'react';

class Article extends Component {
  render () {
    let { data } = this.props;
    return (
      <div className="article-cover">
        <h2>{ data.title }</h2>
      </div>
    );
  }
}

export default Article;