import * as React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import './ArticleItem.less';
import { timeSub, getTimeDetail } from '../../utils';
import { IArticle } from './../../interfaces/artilce';

interface IArticleProps extends RouteComponentProps<any> {
  article: IArticle;
}
class ArticleItem extends React.Component<IArticleProps> {
  public render() {
    const { article } = this.props;
    return (
      <div className="item">
        <Link to={{ pathname: `/detail/${article.id}` }}>
          <h2 className="title">{article.title}</h2>
        </Link>
        <div>
          <Link
            className="tag"
            to={{ pathname: '/classify', search: `?key=${article.classify}` }}
          >
            {article.classify}
          </Link>
          <Tooltip
            placement="bottom"
            title={`发布于${getTimeDetail(article.createAt)}`}
          >
            <time className="sup">{timeSub(article.createAt)}</time>
          </Tooltip>
          <span className="sup">{article.views}次阅读</span>
        </div>
      </div>
    );
  }
}

export default withRouter<IArticleProps>(ArticleItem);
