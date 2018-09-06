import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Tooltip } from 'antd';
import './ArticleItem.less';
import { timeSub } from './../../utils';
class ArticleItem extends Component {  
  render() {
    let { article } = this.props;
    return (
      <div className="item">
        <h2 className="title" onClick={ this.goTo } data-id={article.id}>{ article.title }</h2>
        <div>
          <Link className="tag" to={{pathname: '/classify', search: `?key=${article.classify}`}}>{ article.classify }</Link>
          <Tooltip placement="bottom" title={`发布于${article.createAt}`}>
            <time className="sup">{ timeSub(article.createAt) }</time>
          </Tooltip>
          <span className="sup">{ article.views }次阅读</span>
        </div>
      </div>
    );
  }

  goTo = (e) => {
    let id = e.target.dataset.id;
    this.props.history.push(`/detail/${id}`);
  }
}

export default withRouter(ArticleItem);