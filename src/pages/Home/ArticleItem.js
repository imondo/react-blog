import React, { Component } from 'react';

class ArticleList extends Component {
  render() {
    let { article } = this.props;
    return (
      <div className="item">
        <h2>{ article.title }</h2>
      </div>
    );
  }
}

export default ArticleList;