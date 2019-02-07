import React, {Component} from 'react';
import axios from '../../axios-new-pages';


// import './PageForm.css';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class PageForm extends Component {

  state = {
    content: '',
    path: '',
    title: '',
    pages: null,
    selectedPath: 'about'
  };

  valueChanged = event  => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.selectedPath, this.state.title, this.state.content);
  };

  componentDidUpdate() {
    if (this.state.selectedPath !== this.state.path) {
      this.loadPageData();
    }
  }

  loadPageData() {
    let url = `new-pages/${this.state.selectedPath}.json`;
    axios.get(url).then(response => {
      if (response.data) {
        this.setState({title: response.data.title,
          content: response.data.content,
          path: this.state.selectedPath});
      }
    });
  }

  componentDidMount() {
    axios.get('/new-pages.json')
      .then(response => {
        let pages = Object.keys(response.data).map(key => {
          return {title: response.data[key]['title'], path: key}
        });
        let firstPage = response.data['about'];
        this.setState({pages: pages,
                       path: 'about',
                       title: firstPage.title,
                       content: firstPage.content});
      })
  }

  render() {
    return (
      this.state.path && (<Form className='PageForm' onSubmit={this.submitHandler}>
        <FormGroup row>
          <Label for="path" sm={2}>Page</Label>
          <Col sm={10}>
            <Input type='select' id='category' onChange={this.valueChanged} value={this.state.selectedPath} name='selectedPath'>
              {this.state.pages.map(page => (
                <option key={page.path} value={page.path}>{page.title}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" placeholder="Edit title" onChange={this.valueChanged} value={this.state.title}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="content" sm={2}>Content</Label>
          <Col sm={10}>
            <Input type="textarea" name="content" id="content" onChange={this.valueChanged} value={this.state.content}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{size: 10, offset: 2}}>
            <Button type='submit'>Save</Button>
          </Col>
        </FormGroup>
      </Form>)
    );
  }
}

export default PageForm;