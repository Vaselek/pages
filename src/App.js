import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import PageComponent from "./components/PageComponent/PageComponent";
import Layout from "./components/Layout/Layout";
import EditPageContainer from "./containers/EditPageContainer";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/new-pages/admin' exact component={EditPageContainer}></Route>
          <Route path='/' component={PageComponent}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
