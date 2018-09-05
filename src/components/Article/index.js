import React, { Component } from 'react';
import { timeSub } from './../../utils';
import './marked.less';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  render () {
    let { data } = this.props;
    return (
      <div className="article-cover markdown-section">
        <h2>{ data.title }</h2>
        <time className="icon"><i className="icon-fa-calendar-check-o"></i>{ timeSub(data.createAt) }</time>
        <span className="icon"><i className="icon-fa-tags"></i> { data.classify }</span>
        <span className="icon"><i className="icon-fa-eye"></i> { data.views }次阅读</span>
        <ReactMarkdown  source={data.content}/>
      </div>
    );
  }
}

export default Article;