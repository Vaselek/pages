import React, {Component} from 'react';
import PageForm from "../components/PageForm/PageForm";
import axios from '../axios-new-pages';

class EditPageContainer extends Component {

  editPage = (path, title, content) => {
    let editPath = (path === '/') ? '/home' : '/' + path;
    let url = `new-pages/${path}.json`;
    axios.put(url, {title, content}).then(() => {
      this.props.history.replace(editPath);
    })
  }

  render() {
    let form = <PageForm onSubmit={this.editPage}/>
    return (
      <div>
        <h1>Edit page</h1>
        {form}
      </div>
    );
  }
}

export default EditPageContainer;