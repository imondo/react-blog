import React, { Component } from 'react';
import { timeSub } from './../../utils';
import './marked.less';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  render () {
    let { data } = this.props;
    console.log(data)
    return (
      <div className="article-cover markdown-section">
        <h2>{ data.title }</h2>
        <time>{ timeSub(data.createAt) }</time>
        <ReactMarkdown  source={data.content}/>
      </div>
    );
  }
}

export default Article;