import React, { Component } from 'react';
import axios from '../../axios';
import Article from '../../components/Article';
import { RouteComponentProps } from 'react-router-dom';
import { IArticle } from './../../interfaces/artilce';

interface IState {
  list: any;
}

class Detail extends Component<RouteComponentProps<any>, IState> {
  public state: IState = {
    list: {}
  };
  constructor(props: any) {
    super(props);
  }
  public async componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/classes/article/${id}`).then((res: IArticle) => {
      this.setState({ list: res });
    });
  }
  public render() {
    return (
      <div className="detail">
        <Article data={this.state.list} />
      </div>
    );
  }
}

export default Detail;
