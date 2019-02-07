import React, {Component} from 'react';
import axios from '../../axios-new-pages';

import './PageComponent.css';

class PageComponent extends Component {

  state = {
    title: '',
    content: '',
    path: ''
  };

  componentDidMount() {
    this.loadData();
  };

  componentDidUpdate(prevProps) {
    let path = (this.props.location.pathname === '/') ? '/home' : this.props.location.pathname;
    if(path === this.state.path) {
      return true;
    } else {
      this.loadData();
    }
  }

  loadData() {
    let path = (this.props.location.pathname === '/') ? '/home' : this.props.location.pathname;
    let url = `new-pages${path}.json`;
    axios.get(url).then(response => {
      if (response.data) {
        this.setState({title: response.data.title,
                       content: response.data.content,
                       path: path});
      }
    });
  }

  render() {
    return (
      <div>
          <h3 className='pageTitle'>{this.state.title}</h3>
          <div>{this.state.content}</div>
      </div>
    );
  }
}

export default PageComponent;