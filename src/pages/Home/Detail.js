import React, { Component } from 'react';
import axios from './../../axios';
import Article from '../../components/Article';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
  }
  async componentWillMount() {
    let id = this.props.match.params.id;
    let list = await axios.get(`/api/classes/article/${id}`);
    this.setState({ list });
  }
  render() {
    return (
      <div className="detail">
        <Article  data={this.state.list}/>
      </div>
    );
  }
}

export default Detail;