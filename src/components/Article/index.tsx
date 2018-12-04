import React, { Component } from 'react';
import { timeSub } from './../../utils';
import './marked.less';
import ReactMarkdown from 'react-markdown';
import { IArticle } from './../../interfaces/artilce';

class Article extends Component<{ data: IArticle }> {
  public render() {
    const { data } = this.props;
    return (
      <div className="article-cover markdown-section">
        <h2>{data.title}</h2>
        <time className="icon">
          <i className="icon-fa-calendar-check-o" />
          {timeSub(data.createAt)}
        </time>
        <span className="icon">
          <i className="icon-fa-tags" /> {data.classify}
        </span>
        <span className="icon">
          <i className="icon-fa-eye" /> {data.views}次阅读
        </span>
        <ReactMarkdown source={data.content} />
      </div>
    );
  }
}

export default Article;
